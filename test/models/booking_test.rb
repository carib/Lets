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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
