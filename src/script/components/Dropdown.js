import { createEl } from "../utils/createEl.js";
import { createSVG } from "../utils/createSVG.js";
import { renderTags } from "../utils/renderTags.js";
import { renderCards } from "../utils/renderCards.js";
import { Tags } from "./Tags.js";

import { Query } from "../helpers/Query.js";

export class Dropdown {
  constructor(optionsData, sortType) {
    this._optionsData = optionsData;
    this._sortType = sortType;
    this._selectedOptions = [];

    this.$cardsContainer = document.querySelector('#cards-container');

    document.addEventListener("tagRemoved", this.handleTagRemoved.bind(this));
  }

  // Create the dropdown element and its options
  createDropdown() {
    this.$dropdown = createEl('div', {
      class: 'w-48 relative bg-white rounded-md',
      dataset: {
        dropdown: this._sortType,
      },
    });

    this.$dropdownButton = createEl('button', {
      class: 'flex items-center justify-between w-full p-4',
      dataset: {
        dropdownButton: this._sortType,
      },
    });

    this.$dropdownButtonIcon = createEl('i', {
      class: 'fas fa-chevron-down ml-2 text-base',
    });

    this.$dropdownList = createEl('ul', {
      class: 'absolute right-0 top-12 bg-white rounded-md w-full max-h-80 overflow-y-auto hidden z-10 p-4 ',
      dataset: {
        dropdownList: this._sortType,
      },
    });

    this.$dropdownListSearchContainer = createEl('div', {
      class: 'flex items-center justify-between relative mb-4',
    });

    this.$dropdownListSearch = createEl('input', {
      class: 'w-full border border-[#C6C6C6] p-2 relative',
      dataset: {
        dropdownListSearch: this._sortType,
      },
    });

    this.$dropdownListSearchIconContainer = createEl('div', {
      class: 'absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center',
    });

    this.$dropdownListSearchIcon = createSVG('#7A7A7A');
    this.$dropdownListSearchIcon.classList.add('w-4', 'h-4', 'cursor-pointer');

    this.$dropdownListSearchCloseIcon = createEl('i', {
      class: 'fas fa-times text-[#7A7A7A] text-sm cursor-pointer mr-2',
    });

    this.$dropdownButton.innerText = this._sortType;

    this.$dropdownListSearchIconContainer.append(this.$dropdownListSearchCloseIcon, this.$dropdownListSearchIcon);
    this.$dropdownListSearchContainer.append(this.$dropdownListSearch, this.$dropdownListSearchIconContainer);
    this.$dropdownList.append(this.$dropdownListSearchContainer);
    this.$dropdownButton.append(this.$dropdownButtonIcon);
    this.$dropdown.append(this.$dropdownButton, this.$dropdownList);

    this.handleSearch();
    this.handleClearSearch();
    this.createDropdownOptions();
    this.handleDropdownButtonClick();

    return this.$dropdown;
  }

  // Create the dropdown options
  createDropdownOptions() {
    this._optionsData.forEach((option) => {
      const $option = createEl('li', {
        class: ' p-[0.81rem] text-sm hover:bg-[#FFD15B] cursor-pointer',
        dataset: {
          dropdownOption: option,
        },
        innerText: option,
      });

      this.handleOptionClick($option);
      this.$dropdownList.append($option);
    });
  }

  // handle the dropdown button click event
  handleDropdownButtonClick() {
    this.$dropdownButton.addEventListener('click', () => {
      this.$dropdownList.classList.toggle('hidden');
    });

    //close dropdown list when click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest(`[data-dropdown="${this._sortType}"]`)) {
        this.$dropdownList.classList.add('hidden');
      }
    });
  }

  // handle option click event
  handleOptionClick(option) {
    option.addEventListener('click', async () => {
      if (this._selectedOptions.includes(option.innerText)) return;

      this._selectedOptions.push(option.innerText);

      const optionClicked = createEl('li', {
        class: 'p-[0.81rem] text-sm bg-[#FFD15B] font-bold flex justify-between items-center',
        dataset: {
          dropdownOptionClicked: option.innerText,
        },
        innerText: option.innerText
      })
      option.style.display = 'none';
      const $closeIcon = createEl('i', {
        class: 'fas fa-circle-xmark cursor-pointer ',
      });
      optionClicked.append($closeIcon);
      this.$dropdownListSearchContainer.insertAdjacentElement('afterend', optionClicked);

      this.renderTagsAndCards(optionClicked);

      $closeIcon.addEventListener('click', (e) =>
        this.handleOptionCloseIconClick(option, optionClicked)
      );
    });
  }

  handleOptionCloseIconClick(option, optionClicked) {
    optionClicked.addEventListener('click', (e) => e.stopPropagation());
    this._selectedOptions = this._selectedOptions.filter((selectedOption) => selectedOption !== option.innerText);
    optionClicked.remove()
    option.style.display = 'block';

    const $tag = document.querySelector(`[data-tag="${option.innerText}"]`)
    new Tags().closeTags($tag)

    this.renderTagsAndCards();
  }

  handleTagRemoved(e) {
    const { tagOption } = e.detail;
    this._selectedOptions = this._selectedOptions.filter((selectedOption) => selectedOption !== tagOption);

    const $optionClicked = document.querySelector(`[data-dropdown-option-clicked="${tagOption}"]`);
    if (!$optionClicked) return;
    $optionClicked.remove()

    const $option = document.querySelector(`[data-dropdown-option="${tagOption}"]`);
    $option.style.display = 'block';

    this.renderTagsAndCards();
  }

  // handle search event
  handleSearch() {
    this.$dropdownListSearch.addEventListener('input', () => {
      const searchValue = this.$dropdownListSearch.value.toLowerCase().trim();

      this.$dropdownList.querySelectorAll('li').forEach((option) => {
        if (option.innerText.toLowerCase().trim().includes(searchValue)) {
          option.classList.remove('hidden');
        } else {
          option.classList.add('hidden');
        }
      });
    });
  }

  // handle clear search event
  handleClearSearch() {
    this.$dropdownListSearchCloseIcon.addEventListener('click', () => {
      this.$dropdownListSearch.value = '';
      this.$dropdownList.querySelectorAll('li').forEach((option) => {
        option.classList.remove('hidden');
      });
    });
  }

  async renderTagsAndCards(optionClicked) {
    if (this._selectedOptions.length === 0) {
      const recipes = await Query.getRecipes();
      renderCards(recipes, this.$cardsContainer);
      return;
    }
    const filteredRecipe = await Query.getRecipesByTags(this._selectedOptions)
    renderCards(filteredRecipe, this.$cardsContainer);

    optionClicked && renderTags(optionClicked.innerText);
  }
}