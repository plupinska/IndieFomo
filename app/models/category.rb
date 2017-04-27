class Category < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_title, :against => [:cat]

  has_many :campaigns
end
