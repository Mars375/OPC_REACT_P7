import { Tags } from "../components/Tags.js"

export const renderTags = (tagOption) => {
  const $tagsContainer = document.querySelector("#tags-container")

  const tags = new Tags(tagOption)
  const $tags = tags.createTags()

  $tagsContainer.append($tags)

  return tags
}
