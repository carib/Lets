# == Schema Information
#
# Table name: spots
#
#  id                      :integer          not null, primary key
#  description             :string           not null
#  lat                     :float            not null
#  lng                     :float            not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  averageRating           :float
#  averagePricePerNight    :float
#  currency                :string
#  pastGuestIds            :string           is an Array
#  reviewIds               :string           is an Array
#  spotType                :string
#  host_id                 :integer
#  spot_image_file_name    :string
#  spot_image_content_type :string
#  spot_image_file_size    :integer
#  spot_image_updated_at   :datetime
#  occupancy               :integer
#

class Spot < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  has_attached_file :spot_image,
    :styles => { full: "1920x1080", hero: "1920x550#", thumbnail: "500x340#" },
    :convert_options => { full: "-gravity center -resize 1920x1080", thumbnail: '-gravity center -resize 500x340' }
  validates_attachment_content_type :spot_image, content_type: /\Aimage\/.*\z/

  has_many :bookings,
    class_name: :Booking,
    foreign_key: :spot_id

  has_many :bookers,
    through: :bookings,
    source: :booker

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

  has_one :spot_detail,
    class_name: :SpotDetail,
    foreign_key: :spot_id,
    dependent: :destroy

  def self.in_bounds(bounds)
    ne_lat = bounds['northEast']['lat'].to_f
    sw_lat = bounds['southWest']['lat'].to_f
    ne_lng = bounds['northEast']['lng'].to_f
    sw_lng = bounds['southWest']['lng'].to_f
    Spot.all.select do |spot|
      spot.in_bounds?(ne_lat, sw_lat, ne_lng, sw_lng)
    end
  end

  def in_bounds?(ne_lat, sw_lat, ne_lng, sw_lng)
    min_lat, max_lat = [ne_lat, sw_lat].min, [ne_lat, sw_lat].max
    min_lng, max_lng = [ne_lng, sw_lng].min, [ne_lng, sw_lng].max
    self.lat.between?(min_lat, max_lat) && self.lng.between?(min_lng, max_lng)
  end
end
