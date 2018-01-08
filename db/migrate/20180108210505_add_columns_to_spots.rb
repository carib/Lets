class AddColumnsToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :averageRating, :float
    add_column :spots, :averagePricePerNight, :float
    add_column :spots, :currency, :string
    add_column :spots, :pastGuestIds, :string, array: true
    add_column :spots, :reviewIds, :string, array: true
  end
end
