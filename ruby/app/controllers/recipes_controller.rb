class RecipesController < ApplicationController
  def index
    @recipes = ContentfulClient.entries(content_type: 'recipe', select: 'fields.title,fields.photo')
  end

  def show
    @recipe = ContentfulClient.entry(params[:id])
  end
end
