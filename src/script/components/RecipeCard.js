import { createEl } from "../utils/index.js";

export class RecipeCard {
  constructor(recipe) {
    this._recipe = recipe;
  }

  createCard() {
    this.$card = createEl('div', {
      class: 'w-96 h-[45rem] rounded-md overflow-hidden shadow-lg relative',
      dataset: {
        card: this._recipe.id,
      },
    });

    this.$cardImgContainer = createEl('div', {
      class: 'w-full h-60',
    });

    this.$cardImg = createEl('img', {
      class: 'w-full h-full object-cover',
      src: this._recipe.image,
      alt: this._recipe.name,
    });

    this.$cardBody = createEl('div', {
      class: 'p-8',
    });

    this.$cardTitle = createEl('h3', {
      class: 'text-xl text-[#1B1B1B] mb-8 font-anton',
      innerText: this._recipe.name,
    });

    this.$cardRecipeInfos = createEl('div', {
      class: 'flex flex-col gap-4',
    });

    this.$cardRecipeDetails = createEl('div', {
      class: 'flex flex-col',
    });

    this.$cardRecipeDetailsTitle = createEl('h4', {
      class: 'text-xs uppercase text-[#7A7A7A] mb-4',
      innerText: 'Recette',
    });

    this.$cardRecipeDetailsDesc = createEl('p', {
      class: 'text-sm text-[#1B1B1B]',
      innerText: `${this._recipe.description.slice(0, 200)}...`,
    });

    this.$cardRecipeIngredients = createEl('div', {
      class: 'flex flex-col',
    });

    this.$cardRecipeIngredientsTitle = createEl('h4', {
      class: 'text-xs uppercase text-[#7A7A7A] mb-4',
      innerText: 'Ingrédients',
    });

    this.$cardRecipeIngredientsList = createEl('ul', {
      class: 'grid grid-cols-2 gap-2',
    });

    this._recipe.ingredientsList.forEach((ingredient) => {
      const $ingredient = createEl('li', {
        class: 'text-sm text-[#1B1B1B] flex flex-col',
        innerText: `${ingredient.ingredient}`,
      });

      const $ingredientQuantity = createEl('span', {
        class: 'text-sm text-[#7A7A7A]',
        innerText: `${ingredient.quantity ? ingredient.quantity : ''} ${ingredient.unit ? ingredient.unit : ''}`,
      });

      $ingredient.appendChild($ingredientQuantity);
      this.$cardRecipeIngredientsList.append($ingredient);
    });

    this.$cardRecipeTime = createEl('p', {
      class: 'absolute top-5 right-5 bg-[#FFD15B] rounded-3xl px-[.9rem] py-[.3rem] text-[#1B1B1B]',
      innerText: `${this._recipe.time} min`,
    });

    this.$cardRecipeDetails.append(this.$cardRecipeDetailsTitle, this.$cardRecipeDetailsDesc);
    this.$cardRecipeIngredients.append(this.$cardRecipeIngredientsTitle, this.$cardRecipeIngredientsList);
    this.$cardRecipeInfos.append(this.$cardRecipeDetails, this.$cardRecipeIngredients, this.$cardRecipeTime);
    this.$cardBody.append(this.$cardTitle, this.$cardRecipeInfos);
    this.$cardImgContainer.append(this.$cardImg);
    this.$card.append(this.$cardImgContainer, this.$cardBody);

    return this.$card;
  }
}