class Api::RewardsController < ApplicationController
  def create
    @reward = Reward.new(rewards_params)
    @project = current_user.projects.find_by(id: params[:project_id])
    existing_project = Project.find_by(id: params[:project_id])

    if !signed_in?
      render json: ['Cannot create rewards without signing in'], status: 401
    elsif !existing_project
      render json: ['Cannot create rewards for projects that do not exist'], status: 404
    elsif !@project
      render json: ['Cannot create rewards for projects that were not created by you'], status: 403
    else
      @reward.project_id = params[:project_id]

      if @reward.save
        @project = Project.find_by(id: @reward.project_id)
        @rewards = Reward.where(project_id: @project.id)
        @user = current_user

        render "api/projects/show"
      else
        render json: @reward.errors.full_messages, status: 401
      end
    end
  end

  # def destroy
  #   # if !current_user.projects.include?(params[:project_id])
  #   #   render json: ['Cannot delete rewards for projects that were not created by you']
  #   # end
  #
  #   @project = Project.find_by(id: params[:project_id])
  #   @reward = Reward.find_by(id: params[:id])
  #
  #
  #   @user = User.find_by(id: @project.creator)
  #   # @user = current_user
  #
  #   if @reward
  #     if @reward.destroy
  #       @rewards = Reward.where(project_id: @project.id)
  #       render "api/projects/show"
  #     else
  #       render json: @reward.errors.full_messages, status: 404
  #     end
  #   else
  #     render json: @reward.errors.full_messages, status: 404
  #   end
  # end

  private

  def rewards_params
    params.require(:reward).permit(:amount, :description, :title)
  end
end
