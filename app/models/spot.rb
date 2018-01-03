class Spot < ApplicationRecord
  validates :description, :lat, :lng, presence: true
end
