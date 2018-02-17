class Api::BookingsController < ApplicationController
  def index
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.spot_id = Spot.find(params[:spotId])
    @booking.booker_id = User.find(params[:currentUser])

    if @booking.save
      render :create
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :num_guests)
  end
end
