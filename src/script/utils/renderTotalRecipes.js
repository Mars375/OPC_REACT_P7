import { createEl } from "./createEl.js"

export const renderTotalRecipes = (totalRecipes, totalRecipesContainer) => {
  // Create the total recipes element.
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