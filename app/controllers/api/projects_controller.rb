class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id

    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def edit
  end

  def update
    @project = current_user.projects.find_by(id: params[:id])

    if @project
      if @project.update_attributes(project_params)
        render "api/projects/show"
      else
        render json: @project.errors.full_messages, status: 401
      end
    else
      render json: @project.errors.full_messages, status: 404
    end
  end

  def show
    @project = Project.find_by(id: params[:id])
    render "api/projects/show"
  end

  def index
    @projects = Project.all
    render "api/projects/index"
    #replace with render home page or some other page
  end

  def destroy
    @project = current_user.projects.find(params[:id])

    if @project
      @project.destroy
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 404
    end
  end

  private

  def project_params
    params.require(:project).permit(
      :title,
      :short_blurb,
      :description,
      :funding_amount,
      :funding_end_date,
      :image_url,
      :category_id
    )
  end
end
