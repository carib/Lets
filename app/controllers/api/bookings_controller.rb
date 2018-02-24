class Api::BookingsController < ApplicationController
  def index
  end

  def create
    @booking = current_user.bookings.create(booking_params)

    if @booking.save
      render :show
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
    params.require(:booking).permit(:start_date, :end_date, :booker_id, :spot_id, :num_guests)
  end
end
