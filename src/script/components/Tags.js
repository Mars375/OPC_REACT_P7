import { createEl } from "../utils/index.js";

export class Tags {
  constructor(tagOption,) {
    this.tagOption = tagOption;
  }

  createTags() {
    this.$tags = createEl("div",
      {
        class: "bg-[#FFD15B] flex items-center justify-center gap-8 rounded-md p-4 mb-6",
        dataset: {
          tag: this.tagOption
        }
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

    this.$tags.append(this.$tagsText, this.$tagsClose)

    return this.$tags
  }

  closeTags(tag) {
    tag.remove()
  }
}