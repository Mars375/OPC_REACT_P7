import { Query } from "../helpers/query.js";

export const searchRecipes = async (searchInput, searchButton, cardsContainer) => {
  searchInput.addEventListener('keyup', async () => {
    const recipes = await Query.getRecipeByKeyword(searchInput.value.toLowerCase());
    console.log(recipes);
  });

  searchButton.addEventListener('click', async () => {
    const recipes = await Query.getRecipeByKeyword(searchInput.value.toLowerCase());
    console.log(recipes);
  });
}