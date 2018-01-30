#
json.spots do
  json.extract! @spot, :id, :description, :averageRating, :averagePricePerNight, :currency, :reviewIds, :spotType
  json.imageUrl asset_path(@spot.spot_image.url())
end

# json.id @spot.id
# json.description @spot.description
# json.averageRating @spot.averageRating
# json.averagePricePerNight @spot.averagePricePerNight
# json.currency @spot.currency
# json.reviewIds @spot.reviewIds
# json.spotType @spot.spotType

json.spot_detail do
  json.partial!('/api/spot_details/spot_detail')
end
