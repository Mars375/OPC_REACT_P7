import { Query } from "./helpers/Query.js";
import { Loader } from "./components/Loader.js";
import { renderDropdowns } from "./utils/renderDropdowns.js";
import { renderTotalRecipes } from "./utils/renderTotalRecipes.js";
import { renderCards } from "./utils/renderCards.js";
import { searchBar } from "./utils/searchBar.js";
import { updateDropdowns } from "./utils/updateDropdowns.js";

class App {
  constructor() {
    this.recipes = [];
    this.ingredients = [];
    this.appliances = [];
    this.ustensils = [];
    this.dropdowns = [];
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
    this.handleSearch();
  }

  async getData() {
    this.recipes = await Query.getRecipes();
    this.ingredients = await Query.getIngredients(this.recipes);
    this.appliances = await Query.getAppliances(this.recipes);
    this.ustensils = await Query.getUstensils(this.recipes);
  }

  renderPage() {
    this.dropdowns = renderDropdowns(this.$dropdownContainer, this.ingredients, this.appliances, this.ustensils, this.$cardsContainer);
    renderTotalRecipes(this.recipes.length, this.$totalRecipes);
    renderCards(this.recipes, this.$cardsContainer);

    setTimeout(() => {
      Loader.hide();
    }, 1500);
  }

  handleSearch() {
    this.$searchInput.addEventListener("keyup", () => {
      const filteredRecipes = searchBar(this.recipes, this.$searchInput, this.$searchButton, this.$cardsContainer);
      if (!filteredRecipes) return;
      updateDropdowns(this.dropdowns, filteredRecipes);
      renderCards(filteredRecipes, this.$cardsContainer);
      renderTotalRecipes(filteredRecipes.length, this.$totalRecipes);
    });
  }

}

new App();
