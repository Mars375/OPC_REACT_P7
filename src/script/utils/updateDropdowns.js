import { Query } from "../helpers/Query.js"

export const updateDropdowns = (dropdowns, filteredRecipe) => {
  const ingredients = Query.getIngredients(filteredRecipe);
  const appliances = Query.getAppliances(filteredRecipe);
  const ustensils = Query.getUstensils(filteredRecipe);

  dropdowns.forEach(dropdown => {
    if (dropdown._sortType === "Ingredients") {
      dropdown._optionsData = ingredients;
    } else if (dropdown._sortType === "Appareils") {
      dropdown._optionsData = appliances;
    } else if (dropdown._sortType === "Ustensiles") {
      dropdown._optionsData = ustensils;
    }
    dropdown.createDropdownOptions();
  });
}
