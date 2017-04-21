class Campaign < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

    # has_attached_file :beard_photo, styles: {
    #   big: "50x50>",
    #  #  small: "50x50#"
    # }
    # validates_attachment_content_type(
    #   :beard_photo,
    #   content_type: /\Aimage\/.*\Z/
    # )

end
