import DataService from "./DataService.js";
import { Recipe } from "../models/Recipe.js";

export class Query {
  static async getRecipes() {
    const recipesData = await DataService.fetchData();

    const recipes = recipesData.map(recipe => {
      return new Recipe(recipe);
    });
    return recipes;
  }

  static getIngredients(recipes) {
    const normalizedIngredients = recipes
      .map(recipe => recipe.ingredientsList.map(ingredient => ingredient.ingredient.toLowerCase()))
      .flat()
      .sort()
      .filter((ingredient, index, array) => ingredient !== array[index + 1])
      .map(ingredient => ingredient.charAt(0).toUpperCase() + ingredient.slice(1));

    return normalizedIngredients;
  }

  static getAppliances(recipes) {
    const normalizedAppliances = recipes
      .map(recipe => recipe.appliance.toLowerCase())
      .sort()
      .filter((appliance, index, array) => appliance !== array[index + 1])
      .map(appliance => appliance.charAt(0).toUpperCase() + appliance.slice(1));

    return normalizedAppliances;
  }

  static getUstensils(recipes) {
    const normalizedUstensils = recipes
      .map(recipe => recipe.ustensils.map(ustensil => ustensil.toLowerCase()))
      .flat()
      .sort()
      .filter((ustensil, index, array) => ustensil !== array[index + 1])
      .map(ustensil => ustensil.charAt(0).toUpperCase() + ustensil.slice(1));

    return normalizedUstensils;
  }

  static async getRecipesByTags(searchedRecipes, tags) {
    const filteredRecipes = searchedRecipes.filter(recipe => {
      return tags.every(tag => {
        const normalizedTag = tag.toLowerCase().trim();

        const appliance = recipe.appliance.toLowerCase().trim();
        const ingredients = recipe.ingredientsList.map(ingredient => ingredient.ingredient.toLowerCase().trim());
        const ustensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase().trim());

        return (
          appliance === normalizedTag ||
          ingredients.includes(normalizedTag) ||
          ustensils.includes(normalizedTag)
        );
      });
    });

    return filteredRecipes;
  }

}