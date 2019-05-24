class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "api/users/user_and_backed_projects"
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password);
  end
end
