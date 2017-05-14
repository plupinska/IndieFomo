class Api::SearchController < ApplicationController

  def index

    if params[:searchField]
      @campaigns = Campaign.search_by_title(params[:searchField]).take(5)
      render :index
    else
      render json: "No results found"
    end
  end

end
