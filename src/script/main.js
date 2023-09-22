import { Query } from "./helpers/Query.js";
import { Loader } from "./components/Loader.js";
import { renderTotalRecipes, renderCards, renderDropdowns, searchBar } from "./utils/index.js";

class App {
  constructor() {
    this.$searchInput = document.querySelector("#search-input");
    this.$searchButton = document.querySelector("#search-button");
    this.$dropdownContainer = document.querySelector("#dropdowns-container");
    this.$totalRecipes = document.querySelector("#total-recipes");
    this.$cardsContainer = document.querySelector("#cards-container");

    this.init();
  }

  async init() {
    await this.loadData();
    this.setupSearchListener();
    this.setupLoader();
  }

  async loadData() {
    this.recipes = await Query.getRecipes();

    this.renderPage();
  }

  renderPage(filteredRecipes) {
    const recipesToRender = filteredRecipes || this.recipes;
    renderDropdowns(this.$dropdownContainer, recipesToRender, this.$cardsContainer);
    renderTotalRecipes(recipesToRender.length, this.$totalRecipes);
    renderCards(recipesToRender, this.$cardsContainer);
  }

  setupSearchListener() {
    this.$searchInput.addEventListener("keyup", () => {
      const filteredRecipes = searchBar(this.recipes, this.$searchInput, this.$searchButton, this.$cardsContainer);
      this.renderPage(filteredRecipes);
    });
  }

  setupLoader() {
    Loader.hide()
  }
}

new App();
