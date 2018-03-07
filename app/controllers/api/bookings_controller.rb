class Api::BookingsController < ApplicationController
  def index
  end

  def create

    if Booking.is_valid_booking?(
      parse_date(booking_params[:start_date]),
      parse_date(booking_params[:end_date]),
      current_user
    )
      @booking = current_user.bookings.create(booking_params)
      if @booking.save
        render :show
      else
        render json: @booking.errors.full_messages, status: 422
      end
    else
      render json: ['Invalid booking'], status: 401
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

  def parse_date(date)
    yyyy, mm, dd = date.split("/").map(&:to_i)
    Date.new(yyyy, mm, dd)
  end
end
