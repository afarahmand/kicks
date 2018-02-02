class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      render "api/users/show"
    else
      render json: ['Invalid name, email, or password'], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password);
  end
end
