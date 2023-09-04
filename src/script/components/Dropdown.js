import { createEl } from "../utils/createEl.js";

export class Dropdown {
  constructor(optionsData, containerElement, sortType) {
    this.$container = containerElement;
    this._optionsData = optionsData;
    this._sortType = sortType;

    this.createDropdown();
  }

  // Create the dropdown element and its options
  createDropdown() {
    this.$dropdown = createEl('div', {
      class: 'w-48 relative',
      dataset: {
        dropdown: this._sortType,
      },
    });
    this.$dropdown.classList.add('w-48');

    this.$dropdownButton = createEl('button', {
      class: 'dropdown__button',
      dataset: {
        dropdownButton: this._sortType,
      },
    });

    this.$dropdownList = createEl('ul', {
      class: 'hidden w-full bg-white z-10',
      dataset: {
        dropdownList: this._sortType,
      },
    });

    this.$dropdownButton.innerText = this._sortType;

    this.handleDropdownButtonClick();

    this.$dropdown.append(this.$dropdownButton, this.$dropdownList);
    this.$container.append(this.$dropdown);

    this.createDropdownOptions();
  }

  // Create the dropdown options
  createDropdownOptions() {
    this._optionsData.forEach((option) => {
      const $option = createEl('li', {
        class: '',
        dataset: {
          dropdownOption: this._sortType,
        },
      });

      $option.innerText = option;

      this.$dropdownList.append($option);
    });
  }

  // handle the dropdown button click event
  handleDropdownButtonClick() {
    this.$dropdownButton.addEventListener('click', () => {
      this.$dropdownList.classList.toggle('hidden');
    });
  }

  // handle the dropdown option click event
  handleDropdownOptionClick() {
    this.$dropdownList.addEventListener('click', (event) => {
      const $target = event.target;

      if ($target.tagName === 'LI') {
        this.$dropdownButton.innerText = $target.innerText;
        this.$dropdownList.classList.add('hidden');
      }
    });
  }
}