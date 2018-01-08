# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
user1 = User.create!(
  email: 'user@email.com',
  password: 'password',
  firstName: 'Guest',
  lastName: 'User'
)

Spot.destroy_all
20.times do |_|
  num = Random.new
  Spot.create!(
    description: "ENTIRE HOUSE * #{rand(4)} BEDS",
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude,
    averageRating: rand(6),
    averagePricePerNight: num.rand(50.00..300.99).round(2),
    currency: 'USD',
    pastGuestIds: [],
    reviewIds: [],
  )
end
