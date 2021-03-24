import marked from 'marked';

function parameterize(str) {
  return str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};

export function recipeUrl(recipe) {
  return `/${recipe.sys.id}-${parameterize(recipe.fields.title)}`;
}

export function recipePhoto(recipe) {
  return recipe.fields.photo.fields.file.url + '?w=500'
}

export function recipeChef(recipe) {
  if (recipe.fields.chef) {
    return `Recipe by ${recipe.fields.chef.fields.name}`;
  } else {
    return "Popular Recipe";
  }
}

export function recipeDesc(recipe) {
  return marked(recipe.fields.description);
}

export function recipeTags(recipe) {
  if (recipe.fields.tags) {
    return recipe.fields.tags.map((tag) => tag.fields.name);
  } else {
    return [];
  }
}