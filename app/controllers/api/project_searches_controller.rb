class Api::ProjectSearchesController < ApplicationController
  def index
    if (search_params === "")
      @projects = Project.all
    else
      @projects = Project.search_results(search_params)
    end

    render "api/projects/index"
  end

  # def search
  #   p params
  #   p params[:searchQuery]
  #   searchQuery = params[:searchQuery].downcase
  #   all_projects = Project.all
  #
  #   # @projects = all_projects.select{
  #   #   |project|
  #   #   (project.title.downcase.include?(searchQuery) ||
  #   #   project.creator.downcase.include?(searchQuery) ||
  #   #   project.short_blurb.downcase.include?(searchQuery))
  #   # }
  #
  #   @projects = all_projects.select do |project|
  #     project.title.downcase.include?(searchQuery)
  #   end
  #
  #   render "api/projects/index"
  # end

  private

  def search_params
    # params.require(:search).permit(:searchQuery)
    params.require(:search)
  end
end
