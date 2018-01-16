
@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :description, :lat, :lng, :averageRating, :averagePricePerNight, :pastGuestIds, :reviewIds, :spotType
    json.imageThumbUrl asset_path(spot.spot_image.url(:thumbnail))
  end
end
