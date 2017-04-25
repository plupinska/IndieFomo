class Category < ActiveRecord::Base
  has_many :campaigns
end
