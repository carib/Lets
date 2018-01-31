class AddColumnToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :occupancy, :integer
  end
end
