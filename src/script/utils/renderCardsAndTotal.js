import { RecipeCard } from "../components/RecipeCard.js";
import { createEl } from "./index.js";

export const renderCardsAndTotal = (recipes, container, searchInput) => {
  const totalRecipesContainer = document.querySelector("#total-recipes");
  container.innerHTML = "";
  totalRecipesContainer.innerHTML = "";

  if (recipes.length === 0) {
    container.classList.remove("grid-cols-3");
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center w-full h-full text-center">
        <h2 class="text-3xl font-bold text-gray-600">Aucune recette ne contient ${searchInput ? searchInput.value : 'cet ou ces ingrédient'}</h2>
        <p class="text-xl text-gray-400">Vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>
      </div>
    `;
  } else {
    container.classList.add("grid-cols-3");
    const cardsComponent = recipes.map(card => {
      const cardComponent = new RecipeCard(card);
      const $card = cardComponent.createCard();
      container.append($card);
      return cardComponent;
    });

    const totalRecipesEl = createEl("p", {
      class: "text-xl text-[#1B1B1B] font-anton",
      innerText: `${recipes.length} recettes`
    });
    totalRecipesContainer.appendChild(totalRecipesEl);
  }
}

