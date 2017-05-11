# json.extract! @campaign, :user_id, :title, :descriptions,
#  :tagline, :category_id, asset_path(:image[:url]), :end_date, :target_amount


  json.id @campaign.id
  json.total_contributions @total_contributions
  json.num_contributions @num_contributions
  json.user_id @campaign.user_id
  json.title @campaign.title
  json.descriptions @campaign.descriptions
  json.tagline @campaign.tagline
  json.category_id @campaign.category_id
  json.image_url asset_path(@campaign.image.url)
  json.end_date @campaign.end_date
  json.target_amount @campaign.target_amount
  json.category Category.find(@campaign.category_id).cat
