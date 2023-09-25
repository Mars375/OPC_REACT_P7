import { Dropdown } from "../components/Dropdown.js";
import { Query } from "../helpers/Query.js";

export const renderDropdowns = (dropdownContainer, recipes, cardsContainer, appInstance) => {
  dropdownContainer.innerHTML = "";

  const ingredients = Query.getIngredients(recipes);
  const appliances = Query.getAppliances(recipes);
  const ustensils = Query.getUstensils(recipes);

  const dropdownData = [
    { data: ingredients, label: "Ingredients" },
    { data: appliances, label: "Appareils" },
    { data: ustensils, label: "Ustensiles" }
  ];

  const dropdowns = dropdownData.map(dropdown => {
    const dropdownComponent = new Dropdown(dropdown.data, dropdown.label, cardsContainer, recipes, appInstance);
    const $dropdown = dropdownComponent.createDropdown();

    dropdownContainer.append($dropdown);

    return dropdownComponent;
  });

  return dropdowns;
}