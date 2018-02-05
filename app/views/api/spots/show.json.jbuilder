json.set! "spot" do
  json.extract! @spot, :id, :description, :averageRating, :averagePricePerNight, :currency, :reviewIds, :spotType, :occupancy
  json.imageFullUrl asset_path(@spot.spot_image.url(:hero))
end

json.spot_detail do
  json.partial!('/api/spot_details/spot_detail')
end
