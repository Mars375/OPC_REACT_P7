export const searchBar = (recipes, $searchInput, $searchButton, cardsContainer) => {
  cardsContainer.classList.add("grid-cols-3");
  const results = []
  const searchValue = $searchInput.value.toLowerCase();
  if (!searchValue || searchValue.length < 3) {
    $searchButton.classList.remove("bg-[#FFD15B]");
    $searchButton.classList.add("bg-black");
    return recipes;
  }

  $searchButton.classList.remove("bg-black");
  $searchButton.classList.add("bg-[#FFD15B]");
  let i = 0;
  while (i < recipes.length) {
    const recipe = recipes[i];
    const recipeFields = {
      name: recipe.name.toLowerCase(),
      description: recipe.description.toLowerCase(),
      appliance: recipe.appliance.toLowerCase(),
      ingredients: [],
      ustensils: []
    };

    for (let i = 0; i < recipe.ingredientsList.length; i++) {
      recipeFields.ingredients.push(recipe.ingredientsList[i].ingredient.toLowerCase());
    }

    for (let i = 0; i < recipe.ustensils.length; i++) {
      recipeFields.ustensils.push(recipe.ustensils[i].toLowerCase());
    }

    const isRecipeName = recipeFields.name.includes(searchValue);
    const isRecipeDescription = recipeFields.description.includes(searchValue);
    const isRecipeAppliance = recipeFields.appliance.includes(searchValue);
    const isRecipeIngredient = recipeFields.ingredients.some(ingredient => ingredient.includes(searchValue));
    const isRecipeUstensil = recipeFields.ustensils.some(ustensil => ustensil.includes(searchValue));

    if (isRecipeName || isRecipeDescription || isRecipeAppliance || isRecipeIngredient || isRecipeUstensil) {
      results.push(recipe);
    }
    i++;
  }

  if (!results || results.length === 0) {
    cardsContainer.classList.remove("grid-cols-3");
    cardsContainer.innerHTML = `
          <div class="flex flex-col items-center justify-center w-full h-full text-center">
            <h2 class="text-3xl font-bold text-gray-600">Aucune recette ne correspond à ${searchValue}…</h2>
            <p class="text-xl text-gray-400">Vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>
          </div>
        `;
    return;
  };
  return results;
};