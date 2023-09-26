import { Query } from "./helpers/Query.js";
import { Loader } from "./components/Loader.js";
import { renderCardsAndTotal, renderDropdowns, searchBar, updateDropdowns } from "./utils/index.js";

export class App {
  constructor() {
    this.$searchInput = document.querySelector("#search-input");
    this.$searchButton = document.querySelector("#search-button");
    this.$dropdownContainer = document.querySelector("#dropdowns-container");
    this.$cardsContainer = document.querySelector("#cards-container");

    this.filteredRecipes;
    this.searchedRecipes;
    this.appInstance = this;
    this.dropdowns

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
    this.dropdowns = renderDropdowns(this.$dropdownContainer, this.recipes, this.$cardsContainer, this.appInstance);
  }

  renderPage() {
    const recipesToRender = this.searchedRecipes ? this.searchedRecipes : this.recipes;
    renderCardsAndTotal(recipesToRender, this.$cardsContainer, this.$searchInput);
  }

  setupSearchListener() {
    this.$searchInput.addEventListener("keyup", () => {
      const dataToUse = this.filteredRecipes && this.filteredRecipes.length > 0 ? this.filteredRecipes : this.recipes;
      this.searchedRecipes = searchBar(dataToUse, this.$searchInput, this.$searchButton, this.$cardsContainer);
      this.renderPage();
      updateDropdowns(this.dropdowns, this.searchedRecipes);
    });
  }

  setupLoader() {
    Loader.hide()
  }
}

new App();