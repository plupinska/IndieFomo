class Category < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_title, :against => [:cat]
  has_attached_file :image, default_url: "profile_placeholder.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  
  has_many :campaigns
end
