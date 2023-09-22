export const searchBar = (recipes, searchInput, $searchButton, cardsContainer) => {
  cardsContainer.classList.add("grid-cols-3");
  // Get the value of the search input.
  const searchValue = searchInput.value.trim().toLowerCase();
  if (!searchValue || searchValue.length < 3) {
    $searchButton.classList.remove("bg-[#FFD15B]");
    $searchButton.classList.add("bg-black");
    return;
  }

  $searchButton.classList.remove("bg-black");
  $searchButton.classList.add("bg-[#FFD15B]");
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

    // Check if the recipe name, description, ingredients, appliance or ustensils contains the search value.
    if (
      recipeName.includes(searchValue) ||
      recipeDescription.includes(searchValue) ||
      recipeIngredients.includes(searchValue)
    ) {
      // Return the recipe.
      return recipe;
    }
  });

  return filteredRecipes;
}