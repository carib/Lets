class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.in_bounds(params[:bounds])
  end

  def create
    @spot = Spot.new(spot_params)

    if @spot.save
      render :show
    else
      render @spot.errors.full_messages, status: 422
    end
  end

  def show
  end

  private
  # def spot_params
  #   params.require(:spot).permit(
  #     :description,
  #     :lat,
  #     :lng,
  #     :averageRating,
  #     :averagePricePerNight,
  #     :currency,
  #     :pastGuestIds,
  #     :reviewIds,
  #     :spotType,
  #   )
  # end
end
