export const searchBar = (recipes, searchValue, $searchButton, cardsContainer) => {
  cardsContainer.classList.add("grid-cols-3");
  const results = []

  $searchButton.classList.remove("bg-black");
  $searchButton.classList.add("bg-[#FFD15B]");

  let i = 0;
  while (i < recipes.length) {
    const recipe = recipes[i];
    const recipeFields = {
      name: recipe.name.toLowerCase(),
      description: recipe.description.toLowerCase(),
      ingredients: [],
    };

    for (let i = 0; i < recipe.ingredientsList.length; i++) {
      recipeFields.ingredients.push(recipe.ingredientsList[i].ingredient.toLowerCase());
    }

    const isRecipeName = recipeFields.name.includes(searchValue);
    const isRecipeDescription = recipeFields.description.includes(searchValue);
    const isRecipeIngredient = recipeFields.ingredients.some(ingredient => ingredient.includes(searchValue));

    if (isRecipeName || isRecipeDescription || isRecipeIngredient) {
      results.push(recipe);
    }
    i++;
  }

  console.log(results);
  return results;
};