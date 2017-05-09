
json.array! @categories do |category|
  # json.set! category.id do
    json.id category.id
    json.cat category.cat
    json.image category.image
  # end
end
