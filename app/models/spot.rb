# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Spot
      .select('*')
      .having("lat < #{bounds[:northEast][:lat]} && lat > #{bounds[:southWest][:lat]}", )
      .having("lng < #{bounds[:northEast][:lng]} && lng > #{bounds[:southWest][:lng]}", )
  end
end
