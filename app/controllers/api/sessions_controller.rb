class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render :show
    else
      render json: {errors: []}, status: 422
    end
  end

  def destroy
    @user = current_user

    if @user
      logout!
    end

    render :show
  end

end
