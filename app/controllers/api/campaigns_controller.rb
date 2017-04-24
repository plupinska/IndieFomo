class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.all
    render :index
  end

  def create
    @campaign = Campaign.create(campaign_params)

    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status:422
    end
  end

  def show
    
    @campaign = Campaign.find(params[:id])
    render :show
  end

  def edit
    @campaign = Campaign.find(params[:id])
    render :edit
  end

  def update
    @campaign = Campaign.find(params[:id])
    if @campaign.update(campaign_params)
      render :show
    else
      render @campaign.errors.full_messages, status: 422
    end
  end

  def destroy
    @campaign = Campaign.find(params[:id])
    @campaign.destroy!
    render :show
  end

  private
  def campaign_params
    params.require(:campaigns).permit(:user_id, :title, :descriptions,
      :tagline, :category_id, :image_url, :end_date, :target_amount)
  end
end
