import { Query } from "./helpers/query.js";
import { Dropdown } from "./components/Dropdown.js";

class App {
  constructor() {
    this.recipes = [];
    this.ingredients = [];
    this.appliances = [];
    this.ustensils = [];
    this.dropdownContainer = document.querySelector("#dropdowns-container");
    this.totalRecipes = document.querySelector("#total-recipes");
    this.tagsContainer = document.querySelector("#tags-container");
    this.cardsContainer = document.querySelector("#cards-container");
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
    this.renderDropdown();
    // this.renderCards();
    // this.renderTags();
  }

  renderDropdown() {
    const dropdownData = [
      { data: this.ingredients, label: "Ingredients" },
      { data: this.appliances, label: "Appareils" },
      { data: this.ustensils, label: "Ustensiles" }
    ];

    const dropdowns = dropdownData.map(dropdown => {
      return new Dropdown(dropdown.data, this.dropdownContainer, dropdown.label);
    });

    this.dropdowns = dropdowns;
  }
}

new App();
