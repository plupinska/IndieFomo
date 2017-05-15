class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token
  has_attached_file :image, default_url: "profile_placeholder.png",
                    :styles => {
                    :thumb => "40x40",
                    :medium => "355x225"
                  }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :campaigns
  has_many :contributions

  attr_reader :password

  def self.generate_session_token!
    SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token!
    self.save!
    self.session_token
  end

  private
    def ensure_session_token
      self.session_token ||= User.generate_session_token!
    end
end
