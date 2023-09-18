export const searchBar = (searchInput, recipes) => {
  // Get the value of the search input.
  const searchValue = searchInput.value.trim().toLowerCase();
  if (!searchValue || searchValue.length < 3) {
    return recipes;
  }

  // Filter the recipes array to keep only the recipes that contain the search value.
  const filteredRecipes = recipes.filter((recipe) => {
    // Get the recipe name.
    const recipeName = recipe.name.toLowerCase();

    // Get the recipe description.
    const recipeDescription = recipe.description.toLowerCase();

    // Get the recipe ingredients.
    const recipeIngredients = recipe.ingredientsList.map((ingredient) => {
      return ingredient.ingredient.toLowerCase();
    });

    // Get the recipe appliance.
    const recipeAppliance = recipe.appliance.toLowerCase();

    // Get the recipe ustensils.
    const recipeUstensils = recipe.ustensils.map((ustensil) => {
      return ustensil.toLowerCase();
    });

    // Check if the recipe name, description, ingredients, appliance or ustensils contains the search value.
    if (
      recipeName.includes(searchValue) ||
      recipeDescription.includes(searchValue) ||
      recipeIngredients.includes(searchValue) ||
      recipeAppliance.includes(searchValue) ||
      recipeUstensils.includes(searchValue)
    ) {
      // Return the recipe.
      return recipe;
    }
  });

  return filteredRecipes;
}