import { createEl } from "../utils/createEl.js";

export class Tags {
  constructor(tagOption) {
    this.tagOption = tagOption;

    this.createTags();
  }

  createTags() {
    this.$tags = createEl("div",
      {
        class: "bg-[#FFD15B] flex items-center justify-center gap-8 rounded-md p-4 mb-6",
      })

    this.$tagsText = createEl("p",
      {
        class: "text-sm",
        innerText: this.tagOption
      })

    this.$tagsClose = createEl("i",
      {
        class: "fas fa-times cursor-pointer",
        dataset: {
          tagClose: this.tagOption
        }
      })

    this.$tagsClose.addEventListener("click", () => {
      this.closeTags()
    })

    this.$tags.append(this.$tagsText, this.$tagsClose)

    return this.$tags
  }

  closeTags() {
    this.$tags.remove()
  }
}