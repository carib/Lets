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

  def self.is_valid_booking?(start_date, end_date, booker, spot)
    sdate, edate = start_date, end_date
    return false if sdate < Time.now || edate < Time.now
    return false if sdate >= edate
    booker.bookings.each do |booking|
      bsd, bed = booking.start_date, booking.end_date
      return false if sdate >= bsd && sdate < bed
      return false if edate > bsd && edate <= bed
    end
    spot.bookings.each do |booking|
      bsd, bed = booking.start_date, booking.end_date
      return false if sdate >= bsd && sdate < bed
      return false if edate > bsd && edate <= bed
    end
    true
  end
end
