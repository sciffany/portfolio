import { DESIGN_CATEGORIES } from "./data";

export function getCategory(category: any) {
  let cat = Array.isArray(category)
    ? category
        ?.map((c: any) => c["#text"])
        .find((c: any) => FULL_CATEGORIES.includes(c))
    : category?.["#text"];

  switch (cat) {
    case "Stuffed toy":
    case "Model":
    case "Physical":
      return "Physical";
    case "Poster":
    case "Proposal":
    case "Design":
    case "Link":
      return "Design";
    case "Sketch":
    case "Drawings":
      return "Drawings";
    case "Animation":
      return "Animation";
    default:
      return cat;
  }
}

const FULL_CATEGORIES = [
  "Stuffed toy",
  "Model",
  "Physical",
  "Poster",
  "Proposal",
  "Design",
  "Link",
  "Sketch",
  "Drawings",
  "Animation",
];
