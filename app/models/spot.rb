# == Schema Information
#
# Table name: spots
#
#  id                   :integer          not null, primary key
#  description          :string           not null
#  lat                  :float            not null
#  lng                  :float            not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  averageRating        :float
#  averagePricePerNight :float
#  currency             :string
#  pastGuestIds         :string           is an Array
#  reviewIds            :string           is an Array
#  spotType             :string
#

# SAMPLE STATE:
# spots: {
  # 1: {
  #   id: 1,
  #   hostId: 2,
  #   title: "East Village Villa",
  #   type: "Studio Apartment",
  #   lat: 40.7265,
  #   lng: 73.9815,
  #   averageRating: 4.5,
  #   averagePricePerNight: { usd: 9.99 },
  #   pastGuestIds: [4, 5, 6],
  #   reviewIds: [7, 8, 9],
  # }
# },

class Spot < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Spot
      .select('*')
      .having("lat < #{bounds[:northEast][:lat]} && lat > #{bounds[:southWest][:lat]}", )
      .having("lng < #{bounds[:northEast][:lng]} && lng > #{bounds[:southWest][:lng]}", )
  end
end
