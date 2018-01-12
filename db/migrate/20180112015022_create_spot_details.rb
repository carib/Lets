class CreateSpotDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :spot_details do |t|
      t.string :country
      t.string :state_province
      t.string :city
      t.float :rooms
      t.float :beds
      t.float :baths
      t.boolean :internet, default: false
      t.boolean :kitchen, default: false
      t.boolean :outdoor_area, default: false
      t.boolean :laundry, default: false
      t.boolean :parking, default: false
      t.boolean :pets, default: false
      t.boolean :tv, default: false

      t.timestamps
    end
    add_reference :spot_details, :spot, foreign_key: true
  end
end
# address: {
# +                          country: "United States",
# +                          state_province: "New York",
# +                          city: "New York City",
# +                          coordinates: { long: '40.7265 N', lat: '73.9815 W'},
# +                  },
# +                  rating:
# +                  price:
# +                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
# +                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
# +                  layout: {
# +                         rooms: 1,
# +                         beds: 1,
# +                         baths: 0.5,
# +                  },
# +                  amenities: {
# +                            internet:  true,
# +                            kitchen: false,
# +                            outdoor_area: false,
# +                            laundry: false,
# +                            parking: false,
# +                            pets: true,
# +                            tv: false,
