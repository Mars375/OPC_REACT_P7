import { RecipeCard } from "../components/RecipeCard.js"

export const renderCards = (cards, container) => {
  container.innerHTML = "";

  const cardsComponent = cards.map(card => {
    const cardComponent = new RecipeCard(card);
    container.appendChild(cardComponent.$card);

    return cardComponent;
  });

  return cardsComponent;
}
