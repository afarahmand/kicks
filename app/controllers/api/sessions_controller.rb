class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      #render :json ['Successfully logged in'], status: 200
      render "api/users/show"
    else
      render :json ['Invalid email or password'], status: 401
    end
  end

  def destroy
    if current_user
      sign_out
      render :json ['Logged out'], status: 200
    else
      render :json ['User is not logged in'], status: 404
    end
  end
end
