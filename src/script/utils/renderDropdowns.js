import { Dropdown } from "../components/Dropdown.js";

export const renderDropdowns = (dropdownContainer, ingredients, appliances, ustensils, cardsContainer) => {
  const dropdownData = [
    { data: ingredients, label: "Ingredients" },
    { data: appliances, label: "Appareils" },
    { data: ustensils, label: "Ustensiles" }
  ];

  const dropdowns = dropdownData.map(dropdown => {
    const dropdownComponent = new Dropdown(dropdown.data, dropdown.label, cardsContainer);
    const $dropdown = dropdownComponent.createDropdown();

    dropdownContainer.append($dropdown);

    return dropdownComponent;
  });

  return dropdowns;
}