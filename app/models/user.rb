class User < ApplicationRecord
  validates :email, :name, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 4, allow_nil: true }
  validates :name, length: { minimum: 1 }
  validates :email, uniqueness: true

  before_validation :ensure_session_token

  attr_reader :password

  has_many :projects

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)

    if user && user.is_password?(pw)
      return user
    else
      return nil
    end
  end
end
