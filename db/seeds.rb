# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Spot.destroy_all
Spot.create!(description: "Add wall dimensions, visibility", lat: 40.683198, lng: -73.910535)
Spot.create!(description: "Big wall, add already painted?", lat: 40.706523, lng: -73.922554)
