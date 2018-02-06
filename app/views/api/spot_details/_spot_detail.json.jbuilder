json.extract! @spot.spot_detail, :id, :spot_id, :rooms, :beds, :baths, :internet, :kitchen, :outdoor_area, :laundry, :parking, :pets, :tv, :country, :state_province, :city

json.blurb @spot.spot_detail.blurb
#
# json.spot_detail @spot.spot_detail
