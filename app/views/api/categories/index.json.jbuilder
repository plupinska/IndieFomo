
json.array! @categories do |category|

    json.id category.id
    json.cat category.cat
    json.image category.image
end
