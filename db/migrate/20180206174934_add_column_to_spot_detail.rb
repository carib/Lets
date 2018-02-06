class AddColumnToSpotDetail < ActiveRecord::Migration[5.1]
  def change
    add_column :spot_details, :blurb, :string
  end
end
