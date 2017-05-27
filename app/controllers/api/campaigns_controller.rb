class Api::CampaignsController < ApplicationController

  def index
    #look into services(Service Objects)
    if params["num"] == "all";
      if params["category"] === "none"
        @campaigns = Campaign.includes(:user, :contributions).all
      elsif params["category"] != "none"
        if params["category"].to_i > 0
          @campaigns = Campaign.includes(:category).where(category_id: params["category"].to_i)
        else
          category_id = Category.find(cat: params["category"])
          @campaigns = Campaign.where(category_id: category_id)
        end
      else
        @campaigns = Campaign.where(cat: params["cat"])
      end
    else params["num"].to_i.is_a?(Integer)
      @campaigns = Campaign.includes(:user, :contributions).take(params["num"].to_i)
    end
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
    contribution = Contribution.includes(:campaign).where(campaign_id: params[:id])
    @num_contributions = contribution.count
    @total_contributions = contribution.sum(:amount)
    render :show
  end

  def update
    @campaign = Campaign.find(params[:id])

    if @campaign.update(campaign_params)
      category = Category.find_by(cat: category_title_param[:category_name]).id
      @campaign.update(category_id: category)
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
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
      :tagline, :image, :end_date, :target_amount)
  end

  def category_title_param
    params.require(:campaign).permit(:category_name)
  end
end
