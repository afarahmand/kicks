class Api::BackingsController < ApplicationController
  def create
    @backing = Backing.new
    @reward = Reward.find_by(id: params[:reward_id])
    @project = @reward.project
    @user = current_user

    if !signed_in?
      render json: ["You must be signed in to back projects"], status: 401
    elsif current_user.projects.include?(@project) # Check to make sure user doesn't back own project
      render json: ["You can't back your own projects"], status: 403
    elsif !@project
      render json: ["You can't back a project that does not exist"], status: 404
    elsif !@reward
      render json: ["You must choose an existing reward to back a project"], status: 404
    elsif current_user.backed_projects.include?(@project)
      render json: ["You can't back a project again once you have already backed it"], status: 403
    else
      @backing.user_id = current_user.id
      @backing.reward_id = @reward.id

      if @backing.save
        render "api/backings/show"
      else
        render json: @backing.errors.full_messages, status: 404
      end
    end
  end
end
