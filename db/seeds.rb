# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
User.create!(
  email: 'user@email.com',
  password: 'password',
  firstName: 'Guest',
  lastName: 'User',
  host: false,
  avatar: File.open("app/assets/images/users/23.jpeg")
)

20.times do |t|
  first = Faker::Name.first_name
  last = Faker::Name.last_name
  email = Faker::Internet.email(first)
  User.create!(
    email: email,
    password: 'password',
    firstName: first,
    lastName: last,
    host: Faker::Boolean.boolean,
    avatar: File.open("app/assets/images/users/#{t}.jpeg")
  )
end

Spot.destroy_all
20.times do |t|
  desc = [
    Faker::TwinPeaks.location,
    Faker::RickAndMorty.location,
    Faker::OnePiece.location,
    Faker::LordOfTheRings.location,
    Faker::HitchhikersGuideToTheGalaxy.location
  ]
  type = ["ENTIRE HOUSE", "PRIVATE ROOM", "SHARED ROOM"]
  num = Random.new
  Spot.create!(
    description: desc[rand(5)],
    lat: num.rand(33.097518..43.548450).round(6),
    lng: num.rand(-119.052693..-69.458934).round(6),
    averageRating: rand(6),
    averagePricePerNight: num.rand(50.00..300.99).round(2),
    currency: 'USD',
    occupancy: rand(16),
    pastGuestIds: [],
    reviewIds: [],
    spotType: "#{type[rand(3)]}",
    host_id: User.ids[rand(21)],
    spot_image: File.open("app/assets/images/spots/#{t}.jpeg")
  )
end

SpotDetail.destroy_all
20.times do |i|
  SpotDetail.create!(
    country: "United States",
    state_province: Faker::Address.state,
    city: Faker::Address.city,
    rooms: rand(15),
    beds: rand(50),
    baths: rand(22),
    internet: Faker::Boolean.boolean,
    kitchen: Faker::Boolean.boolean,
    outdoor_area: Faker::Boolean.boolean,
    laundry: Faker::Boolean.boolean,
    parking: Faker::Boolean.boolean,
    pets: Faker::Boolean.boolean,
    tv: Faker::Boolean.boolean,
    spot_id: Spot.ids[i],
    blurb: Faker::Hipster.paragraphs,
  )
end
