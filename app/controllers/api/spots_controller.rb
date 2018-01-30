class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.in_bounds(params[:bounds])
  end

  def create
    @spot = Spot.new(spot_params)

    if @spot.save
      render json: 'api/spots'
    else
      render @spot.errors.full_messages, status: 422
    end
  end

  def show
    @spot = Spot.includes(:spot_detail).find(params[:id])
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
      :lat,
      :lng,
    )
  end
end
