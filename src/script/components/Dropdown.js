import { createEl } from "../utils/createEl.js";
import { createSVG } from "../utils/createSVG.js";
import { renderTags } from "../utils/renderTags.js";

export class Dropdown {
  constructor(optionsData, sortType) {
    this._optionsData = optionsData;
    this._sortType = sortType;

    this.createDropdown();
  }

  // Create the dropdown element and its options
  createDropdown() {
    this.$dropdown = createEl('div', {
      class: 'w-48 relative bg-white rounded-md p-4',
      dataset: {
        dropdown: this._sortType,
      },
    });

    this.$dropdownButton = createEl('button', {
      class: 'flex items-center justify-between w-full',
      dataset: {
        dropdownButton: this._sortType,
      },
    });

    this.$dropdownButtonIcon = createEl('i', {
      class: 'fas fa-chevron-down ml-2 text-base',
    });

    this.$dropdownList = createEl('ul', {
      class: 'absolute right-0 top-12 bg-white rounded-md w-full h-80 overflow-y-auto hidden z-10 p-4 ',
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

    this.$dropdownListSearchIcon = createSVG('#7A7A7A');
    this.$dropdownListSearchIcon.classList.add('absolute', 'right-0', 'top-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-4', 'h-4');

    this.$dropdownButton.innerText = this._sortType;

    this.$dropdownListSearchContainer.append(this.$dropdownListSearch, this.$dropdownListSearchIcon);
    this.$dropdownList.append(this.$dropdownListSearchContainer);
    this.$dropdownButton.append(this.$dropdownButtonIcon);
    this.$dropdown.append(this.$dropdownButton, this.$dropdownList);

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
          dropdownOption: this._sortType,
        },
      });

      $option.innerText = option;

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
    option.addEventListener('click', () => {
      renderTags(option.innerText);
    });
  }
}