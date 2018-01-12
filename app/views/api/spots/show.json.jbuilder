json.spots do
  json.extract! @spot, :id, :description, :averageRating, :averagePricePerNight, :currency, :reviewIds, :spotType
end

json.spot_details do
  json.extract! @spot.spot_details, partial: 'api/spot_details/spot_detail'
end
