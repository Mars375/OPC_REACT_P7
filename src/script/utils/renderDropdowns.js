import { Dropdown } from "../components/Dropdown.js";

export const renderDropdowns = (dropdownContainer, ingredients, appliances, ustensils) => {
  const dropdownData = [
    { data: ingredients, label: "Ingredients" },
    { data: appliances, label: "Appareils" },
    { data: ustensils, label: "Ustensiles" }
  ];

  const dropdowns = dropdownData.map(dropdown => {
    const dropdownComponent = new Dropdown(dropdown.data, dropdown.label);
    dropdownContainer.appendChild(dropdownComponent.$dropdown);

    return dropdownComponent;
  });

  return dropdowns;
}