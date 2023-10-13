import { Query } from "../helpers/Query.js"

export const updateDropdowns = (dropdowns, recipes) => {
  // Get the data for each dropdown
  const ingredients = Query.getIngredients(recipes);
  const appliances = Query.getAppliances(recipes);
  const ustensils = Query.getUstensils(recipes);

  // Create an array with the dropdown data
  const dropdownData = [
    { data: ingredients, label: "Ingredients" },
    { data: appliances, label: "Appareils" },
    { data: ustensils, label: "Ustensiles" }
  ];

  // Loop through each dropdown
  dropdowns.forEach((dropdown, index) => {
    // Get the data for the current dropdown#
    const dropdownDataToUse = dropdownData[index];
    // Update the dropdown
    dropdown.createDropdownOptions(dropdownDataToUse.data);
  });
}