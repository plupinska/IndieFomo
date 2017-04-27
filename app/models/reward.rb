class Reward < ActiveRecord::Base

  has_attached_file :image, default_url: "reward.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :campaign
end
