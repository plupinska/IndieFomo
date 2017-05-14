

json.array! @campaigns do |campaign|
  json.id campaign.id
  json.title campaign.title
end
