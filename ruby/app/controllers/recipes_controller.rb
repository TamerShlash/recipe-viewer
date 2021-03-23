class RecipesController < ApplicationController
  def index
    @recipes = ContentfulClient.entries(content_type: 'recipe', select: 'fields.title,fields.photo')
  rescue
    render :500
  end

  def show
    @recipe = ContentfulClient.entry(params[:id])
  rescue
    render :500
  end
end
