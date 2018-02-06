# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  firstName           :string           not null
#  lastName            :string           not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  host                :boolean          default(FALSE)
#

# SAMPLE STATE:
# users: {
#              1: {
#                id: 1,
#                email: "humancondition2001@hotmail.com",
#                firstName: "Hannah",
#                lastName: "Arendt",
#                imgUrl: "https://goo.gl/44nkpL",
#                reviewIds: [7],
#                hostedSpotIds: []
#              },

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100" },
      :convert_options => { thumb: "-gravity center -resize 100x100" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :hosted_spots,
    class_name: :Spot,
    foreign_key: :host_id


  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
