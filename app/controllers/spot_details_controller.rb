class SpotDetailsController < ApplicationController
  def update
    @spot_detail = Item.find(params[:id])

    if @spot_detail.update(spot_detail_params)
      spot = @spot_detail.spot

      render json: spot, include: [:spot_detail]
    else
      render json: @spot_detail.errors.full_messages, status: 422
    end
  end

  private
  def spot_detail_params
    params.require(:spot_detail).permit(
      :city, :state_province, :country,
      :rooms, :beds, :baths, :spot_id
    )
  end
end
