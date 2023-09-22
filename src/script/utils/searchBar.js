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

  if (!filteredRecipes || filteredRecipes.length === 0) {
    cardsContainer.classList.remove("grid-cols-3");
    cardsContainer.innerHTML = `
          <div class="flex flex-col items-center justify-center w-full h-full text-center">
            <h2 class="text-3xl font-bold text-gray-600">Aucune recette ne correspond à ${searchValue}…</h2>
            <p class="text-xl text-gray-400">Vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>
          </div>
        `;
    return;
  };

  return filteredRecipes;
}