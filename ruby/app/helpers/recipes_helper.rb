module RecipesHelper
  def recipe_photo(recipe)
    recipe.photo.url(width: 500)
  end

  def recipe_url(recipe)
    "#{root_url}#{recipe.id}-#{recipe.title.parameterize}"
  end

  def recipe_chef(recipe)
    if recipe.fields[:chef]
      "Recipe by #{recipe.chef.name}"
    else
      "Popular Recipe"
    end
  end

  def recipe_desc(recipe)
    Markdown.render(recipe.description).html_safe
  end

  def recipe_tags(recipe)
    if recipe.fields[:tags]
      recipe.tags.map { |t| t.name }
    else
      []
    end
  end

  def recipe_calories(recipe)
    if recipe.fields[:calories]
      "#{recipe.calories} calories"
    else
      ""
    end
  end
end
