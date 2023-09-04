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
      class: 'w-48',
      dataset: {
        dropdown: this._sortType,
      },
    });

    this.$dropdownButton = createEl('button', {
      class: 'dropdown__button',
      dataset: {
        dropdownButton: this._sortType,
      },
    });

    this.$dropdownList = createEl('ul', {
      class: 'hidden',
      dataset: {
        dropdownList: this._sortType,
      },
    });

    this.$dropdownButton.innerText = this._sortType;

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
}