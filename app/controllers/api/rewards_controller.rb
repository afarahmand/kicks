class Api::RewardsController < ApplicationController
  def index
    @rewards = Reward.where(project_id: params[:id])
    render "api/rewards/index"
  end

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
        @rewards = @project.rewards
        @user = current_user

        render "api/projects/show"
      else
        render json: @reward.errors.full_messages, status: 401
      end
    end
  end

  def update
    if !signed_in?
      render json: ['Cannot update rewards without signing in'], status: 401
    elsif !current_user.projects.include?(params[:project_id])
      render json: ['Cannot update rewards for projects that were not created by you']
    end

    @reward = Reward.find_by(id: params[:id])

    if @reward
      if @reward.save
        render "api/rewards/show"
      else
        render json: @reward.errors.full_messages, status: 404
      end
    else
      render json: @reward.errors.full_messages, status: 404
    end
  end

  def destroy
    if !signed_in?
      render json: ['Cannot delete rewards without signing in'], status: 401
    elsif !current_user.projects.include?(params[:project_id])
      render json: ['Cannot delete rewards for projects that were not created by you']
    end

    @reward = Reward.find_by(id: params[:id])

    if @reward
      if @reward.destroy
        @rewards = Reward.where(project_id: params[:project_id])
        render "api/rewards/index"
      else
        render json: @reward.errors.full_messages, status: 404
      end
    else
      render json: @reward.errors.full_messages, status: 404
    end
  end

  private

  def rewards_params
    params.require(:reward).permit(:amount, :description, :title)
  end
end
