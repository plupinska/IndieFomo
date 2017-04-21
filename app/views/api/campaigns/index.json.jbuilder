# json.array! @campaigns do |campaign|
#         json.id  campaign.id
#         json.owner campaign.owner
#         json.descriptions campaign.descriptions
#         json.tagline  campaign.title
#         json.category_id  campaign.category_id
#         json.image_url  campaign.image_url
#         json.end_date  campaign.end_date
#         json.target_amount  campaign.target_amount
#     end
#

 @campaigns.each  do |campaign|
  json.set! campaign.id do
    json.id  campaign.id
    json.title  campaign.title
    json.descriptions  campaign.descriptions
    json.tagline campaign.title
    json.category_id  campaign.category_id
    json.image_url  campaign.image_url
    json.end_date  campaign.end_date
    json.target_amount  campaign.target_amount
    debugger
    json.image_url asset_path(campaign.image.url)
  end
end
