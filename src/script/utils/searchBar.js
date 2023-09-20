export const searchBar = (recipes, $searchInput) => {
  const results = []
  const searchValue = $searchInput.value.toLowerCase();
  if (!searchValue || searchValue.length < 3) return recipes;

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

  return results;
};