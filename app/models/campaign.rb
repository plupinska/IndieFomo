class Campaign < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"


end
