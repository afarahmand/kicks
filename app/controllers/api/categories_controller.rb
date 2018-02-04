class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render "api/categories/index"
  end

  def show
    @category = Category.find_by(id: params[:id])
    render "api/categories/show"
  end
end
