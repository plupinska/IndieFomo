class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.all
    render :index
  end

  def create
    debugger
    @campaign = Campaign.create(campaign_params)
    debugger
    if @campaign.save
      render :show
      debugger
    else
      render json: @campaign.errors.full_messages, status:422
      debugger
    end
  end

  def show

    @campaign = Campaign.find(params[:id])
    render :show
  end

  def edit
    debugger
    @campaign = Campaign.find(params[:id])
    debugger
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
    params.require(:campaign).permit(:user_id, :title, :descriptions,
      :tagline, :category_id, :image_url, :end_date, :target_amount)
  end
end
