# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  start_date :date             not null
#  end_date   :date             not null
#  spot_id    :integer          not null
#  booker_id  :integer          not null
#  num_guests :integer          not null
#  status     :string           default("Pending"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :start_date, :end_date, :spot_id, :booker_id, :num_guests, presence: true

  belongs_to :booker,
    class_name: :User,
    foreign_key: :booker_id

  belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id
  
end
