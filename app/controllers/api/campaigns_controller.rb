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

  def update
    @campaign = Campaign.find(params[:id])
    begin
    if @campaign.update(campaign_params)
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end
    rescue
      render json: 'Please upload an image!'
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
      :tagline, :category_id, :image, :end_date, :target_amount)
  end
end
