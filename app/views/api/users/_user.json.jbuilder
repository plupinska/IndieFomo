
  if (@user)
    json.id @user.id
    json.first_name @user.first_name
    json.last_name @user.last_name
    json.email @user.email
    json.image_url asset_path(@user.image.url)
    json.about_me @user.about_me

    if (@contributions)
      json.contributions @contributions.each do |contribution|
        json.user_id contribution.user_id
        json.reward_id contribution.reward_id

          if (contribution.reward)
            json.reward Reward.find(contribution.reward_id)
          end
        json.amount contribution.amount
        json.campaign_id contribution.campaign_id
        json.date contribution.date
        json.campaign_title Campaign.find(contribution.campaign_id).title
      end
    end

    if (@user.campaigns)
      json.campaigns @user.campaigns.each do |campaign|
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
      end
    end
  else
    {user: nil}
  end
