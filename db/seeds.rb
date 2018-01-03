# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'


Spot.destroy_all
50.times do |_|
  Spot.create!(
    description: Faker::Dune.quote,
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude)
end
