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
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
