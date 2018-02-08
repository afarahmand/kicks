class Api::ProjectDiscoveryController < ApplicationController
  def index
    if (discovery_params[:category] == "")
      @projects = Project.all.limit(discovery_params[:numProjects])
    else
      @projects = Project.discovery_results(
        discovery_params[:category],
        discovery_params[:sort]
      ).limit(discovery_params[:numProjects])
    end

    render "api/projects/index"
  end

  private

  def discovery_params
    params.require(:discovery).permit(:category, :sort, :numProjects)
  end
end
