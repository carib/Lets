class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.in_bounds(params[:bounds])
  end

  def create
    @spot = current_user.hosted_spots.new(spot_params)
    @spot.create_spot_detail(spot_detail_params)
    if @spot.save
      render :show, include: [:spot_detail]
    else
      render @spot.errors.full_messages, status: 422
    end
  end

  def show
    @spot = Spot.includes(:spot_detail).find(params[:id])
    @host = @spot.host
    if @spot
      render :show
    else
      render @spot.errors.full_messages, status: 422
    end
  end

  private
  def spot_params
    params.require(:spot).permit(
      :averagePricePerNight,
      :averageRating,
      :pastGuestIds,
      :description,
      :reviewIds,
      :currency,
      :spotType,
      :occupancy,
      :host_id,
      :lat,
      :lng,
      :spot_image,
    )
  end

  def spot_detail_params
    params.require(:spot).permit(
      :country,
      :rooms,
      :baths,
      :state_province,
      :rooms,
      :city,
      :beds,
      :blurb,
      :internet,
      :kitchen,
      :outdoor_area,
      :laundry,
      :parking,
      :pets,
      :tv,
    )
  end
end
