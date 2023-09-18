import { createEl } from "./createEl.js"

export const renderTotalRecipes = (totalRecipes, totalRecipesContainer) => {
  totalRecipesContainer.innerHTML = "";
  const totalRecipesEl = createEl(
    "p",
    {
      class: "text-xl text-[#1B1B1B] font-anton",
      innerText: `${totalRecipes} recettes`
    },
  );
  totalRecipesContainer.appendChild(totalRecipesEl);
}