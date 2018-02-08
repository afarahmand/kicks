class Api::ProjectSearchesController < ApplicationController
  def index
    # Navigate whether
    if (search_params[:query] == "")
      @projects = Project.all.limit(9)
    else
      @projects = Project.search_results(
        search_params[:query]
      ).limit(9)
    end

    render "api/projects/index"
  end

  private

  def search_params
    params.require(:search).permit(:category, :query, :sort)
  end
end
