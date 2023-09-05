export class Loader {

  static $skeletonContainer = document.querySelector("#skeleton-container");
  static $mainContainer = document.querySelector("#main-container");


  static hide() {
    setTimeout(() => {
      this.$skeletonContainer.remove();
      this.$mainContainer.classList.remove("hidden");
    }, 1500);
  }
}