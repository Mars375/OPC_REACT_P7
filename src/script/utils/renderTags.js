import { Tags } from "../components/Tags.js"

export const renderTags = (tagOption) => {
  const $tagsContainer = document.querySelector("#tags-container")

  const tags = new Tags(tagOption)
  $tagsContainer.appendChild(tags.$tags)

  return tags
}
