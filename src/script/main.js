import { Query } from "./helpers/Query.js";
import { Loader } from "./components/Loader.js";
import { renderDropdowns } from "./utils/renderDropdowns.js";
import { renderTotalRecipes } from "./utils/renderTotalRecipes.js";
import { renderCards } from "./utils/renderCards.js";

class App {
  constructor() {
    this.recipes = [];
    this.ingredients = [];
    this.appliances = [];
    this.ustensils = [];
    this.$searchInput = document.querySelector("#search-input");
    this.$searchButton = document.querySelector("#search-button");
    this.$dropdownContainer = document.querySelector("#dropdowns-container");
    this.$totalRecipes = document.querySelector("#total-recipes");
    this.$cardsContainer = document.querySelector("#cards-container");
    this.init();
  }

  async init() {
    await this.getData();
    this.renderPage();
  }

  async getData() {
    this.recipes = await Query.getRecipes();
    this.ingredients = await Query.getIngredients();
    this.appliances = await Query.getAppliances();
    this.ustensils = await Query.getUstensils();
  }

  renderPage() {
    renderDropdowns(this.$dropdownContainer, this.ingredients, this.appliances, this.ustensils);
    renderTotalRecipes(this.recipes.length, this.$totalRecipes);
    renderCards(this.recipes, this.$cardsContainer);

    setTimeout(() => {
      Loader.hide();
    }, 1500);
  }

}

new App();
