class Campaign < ActiveRecord::Base
  include PgSearch
   validates_numericality_of :target_amount, {greater_than_or_equal_to: 1, allow_nil: false, message: "Please enter an amount greater than zero!"}
   validates :title, length: { minimum: 1, allow_nil: false, message: "Please enter a title!"}

  pg_search_scope :search_by_title, :against => {
    :title => 'A',
    :tagline => 'B',
  }, :using => {
    :tsearch => {:prefix => true}
  }

  has_many :rewards
  belongs_to :category
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
