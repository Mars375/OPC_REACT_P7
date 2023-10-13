export const searchBar = (recipes, searchValue, $searchButton, cardsContainer) => {
  cardsContainer.classList.add("grid-cols-3");
  // Get the value of the search input.
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

    const searchKeywords = searchValue.toLowerCase().split(' ')

    // Check if the recipe name, description, ingredients, appliance or ustensils contains the search value.
    return searchKeywords.every(keyword => (
      recipeName.includes(keyword) ||
      recipeDescription.includes(keyword) ||
      recipeIngredients.some(ingredient => ingredient.includes(keyword))
    ));
  });

  return filteredRecipes;
}
