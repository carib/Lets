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

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
