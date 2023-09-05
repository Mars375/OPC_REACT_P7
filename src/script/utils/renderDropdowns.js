import { Dropdown } from "../components/Dropdown.js";

export const renderDropdowns = (dropdownContainer, ingredients, appliances, ustensils) => {
  const dropdownData = [
    { data: ingredients, label: "Ingredients" },
    { data: appliances, label: "Appareils" },
    { data: ustensils, label: "Ustensiles" }
  ];

  const dropdowns = dropdownData.map(dropdown => {
    return new Dropdown(dropdown.data, dropdownContainer, dropdown.label);
  });

  return dropdowns;
}