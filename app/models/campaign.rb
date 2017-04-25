class Campaign < ActiveRecord::Base
  validates :title, presence: true

  has_many :contributions, through: :user, source: :contributions

  has_one :category

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  has_attached_file :image, default_url: "img_placeholder.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


end
