import { RecipeCard } from "../templates/RecipeCard.js"

export const renderCards = (cards, container) => {
  container.innerHTML = "";
  cards.forEach(card => {
    const recipeCard = new RecipeCard(card);
    container.appendChild(recipeCard.render());
  });
}
