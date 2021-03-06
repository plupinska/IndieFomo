class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status:422
    end
  end

  def update
    @user = User.find(params[:id])
    @contributions = Contribution.where(user_id: params[:id])

    if @user.update(user_params)
      @user.save
      render :show

    else
      render json: @user.errors.full_messages, status:422

    end
  end

  def show
    @user = User.find(params[:id])
    @contributions = Contribution.where(user_id: params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :first_name, :last_name, :image, :about_me)
  end
end
