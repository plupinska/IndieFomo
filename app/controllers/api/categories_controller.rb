class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    if @categories
      render :index
    else
      render json: @categories.errors.full_messages
    end 
  end


end
