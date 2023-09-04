export default class DataService {
  static async fetchData() {
    try {
      const response = await fetch("./data/recipes.json");
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}