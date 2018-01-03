class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
  end

  def create
  end

  def show
  end
end
