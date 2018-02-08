class Api::ProjectDiscoveryController < ApplicationController
  def index
    if (discovery_params[:category] == "")
      @projects = Project.all.limit(9)
    else
      @projects = Project.discovery_results(
        discovery_params[:category],
        discovery_params[:sort]
      ).limit(9)
    end

    render "api/projects/index"
  end

  private

  def discovery_params
    params.require(:discovery).permit(:category, :sort)
  end
end
