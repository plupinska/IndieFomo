class Campaign < ActiveRecord::Base
  include PgSearch

  pg_search_scope :search_by_title, :against => {
    :title => 'A',
    :tagline => 'B',
  }
  has_many :rewards
  validates :title, presence: true
  has_one :category

  has_many :contributions,
    primary_key: :id,
    foreign_key: :campaign_id,
    class_name: "Contribution"

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  has_attached_file :image, default_url: "img_placeholder.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
