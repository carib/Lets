# == Schema Information
#
# Table name: spot_details
#
#  id             :integer          not null, primary key
#  country        :string
#  state_province :string
#  city           :string
#  rooms          :float
#  beds           :float
#  baths          :float
#  internet       :boolean          default(FALSE)
#  kitchen        :boolean          default(FALSE)
#  outdoor_area   :boolean          default(FALSE)
#  laundry        :boolean          default(FALSE)
#  parking        :boolean          default(FALSE)
#  pets           :boolean          default(FALSE)
#  tv             :boolean          default(FALSE)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  spot_id        :integer
#

class SpotDetail < ApplicationRecord
  validates :spot_id, presence: true
  validates :spot_id, uniqueness: true

  belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id,
end
