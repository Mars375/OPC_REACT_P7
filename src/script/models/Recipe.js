export class Recipe {
  constructor(recipe) {
    this._recipe = recipe;
  }

  get recipe() {
    return this._recipe;
  }

  get id() {
    return this._recipe.id;
  }

  get image() {
    return `assets/img/recipesImg/${this._recipe.image}`;
  }

  get name() {
    return this._recipe.name;
  }

  get servings() {
    return this._recipe.servings;
  }

  get ingredientsList() {
    return this._recipe.ingredients.map((ingredient) => {
      return ingredient;
    });
  }

  get time() {
    return this._recipe.time;
  }

  get description() {
    return this._recipe.description;
  }

  get appliance() {
    return this._recipe.appliance;
  }

  get ustensils() {
    return this._recipe.ustensils;
  }
}