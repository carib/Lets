class Spot < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Spot
      .select('*')
      .having("lat < #{bounds[:northEast][:lat]} && lat > #{bounds[:southWest][:lat]}", )
      .having("lng < #{bounds[:northEast][:lng]} && lng > #{bounds[:southWest][:lng]}", )
  end
end
