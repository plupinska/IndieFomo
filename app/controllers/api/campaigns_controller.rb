class Api::CampaignsController < ApplicationController

  def index

    if params["num"] == "all";
      @campaigns = Campaign.includes(:user, :contributions).all
      render :index
    else
      @campaigns = Campaign.includes(:user, :contributions).take(params["num"])
      render :index
    end
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
    @num_contributions = Contribution.where(campaign_id: params[:id]).count
    @total_contributions = Contribution.where(campaign_id: params[:id]).sum(:amount)
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
