class Api::RewardsController < ApplicationController

  def index
    #
    @campaign = Campaign.find(params[:campaign_id])
    #  
    render :index
  end

  def show
    @reward = Reward.find(params[:id])
    render :show
  end


  def create

    @reward = Reward.create(reward_params)

    if @reward.save
      render :show
    else
      render json: "Error, please try again!", status: 422
    end
  end

  def update
    @reward = Reward.find(params[:id])
    if @reward.save
      render :show
    else
      render json: "Update uncussesful, please try again!", status: 422
    end
  end

  def destroy
    @reward = Reward.find(params[:id])
    @reward.destroy
    render status: 200
  end

  def reward_params

    params.require(:reward).permit(:campaign_id, :title, :description, :price, :image)
  end
end
