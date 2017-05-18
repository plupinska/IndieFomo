
 @campaigns.each  do |campaign|

  json.set! campaign.id do
    json.num_contributions  Contribution.where(campaign_id: campaign.id).count
    json.total_contributions Contribution.where(campaign_id: campaign.id).sum(:amount)
    json.user campaign.user
    json.id  campaign.id
    json.title  campaign.title
    json.descriptions  campaign.descriptions
    json.tagline campaign.tagline
    json.category_id  campaign.category_id
    json.image_url  campaign.image_url
    json.end_date  campaign.end_date
    json.target_amount  campaign.target_amount
    json.image_url asset_path(campaign.image.url)

    if @category
      json.cat @category
    end
  end
end
