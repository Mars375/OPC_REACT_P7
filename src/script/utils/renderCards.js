import { RecipeCard } from "../components/RecipeCard.js"

export const renderCards = (cards, container, searchInput) => {
  container.innerHTML = "";

  if (cards.length === 0) {
    container.classList.remove("grid-cols-3");
    container.innerHTML = `
          <div class="flex flex-col items-center justify-center w-full h-full text-center">
            <h2 class="text-3xl font-bold text-gray-600">Aucune recette ne contient ${searchInput.value}</h2>
            <p class="text-xl text-gray-400">Vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>
          </div>
        `;
  }
  const cardsComponent = cards.map(card => {
    const cardComponent = new RecipeCard(card);
    const $card = cardComponent.createCard();

    container.append($card);

    return cardComponent;
  });

  return cardsComponent;
}
