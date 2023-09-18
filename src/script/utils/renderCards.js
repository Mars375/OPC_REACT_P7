import { RecipeCard } from "../components/RecipeCard.js"

export const renderCards = (cards, container) => {
  container.innerHTML = "";

  const cardsComponent = cards.map(card => {
    const cardComponent = new RecipeCard(card);
    const $card = cardComponent.createCard();

    container.append($card);

    return cardComponent;
  });

  return cardsComponent;
}
