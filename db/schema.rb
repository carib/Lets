# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180217225712) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "spot_id", null: false
    t.integer "booker_id", null: false
    t.integer "num_guests", null: false
    t.string "status", default: "Pending", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spot_details", force: :cascade do |t|
    t.string "country"
    t.string "state_province"
    t.string "city"
    t.float "rooms"
    t.float "beds"
    t.float "baths"
    t.boolean "internet", default: false
    t.boolean "kitchen", default: false
    t.boolean "outdoor_area", default: false
    t.boolean "laundry", default: false
    t.boolean "parking", default: false
    t.boolean "pets", default: false
    t.boolean "tv", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "spot_id"
    t.string "blurb"
    t.index ["spot_id"], name: "index_spot_details_on_spot_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "description", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "averageRating"
    t.float "averagePricePerNight"
    t.string "currency"
    t.string "pastGuestIds", array: true
    t.string "reviewIds", array: true
    t.string "spotType"
    t.bigint "host_id"
    t.string "spot_image_file_name"
    t.string "spot_image_content_type"
    t.integer "spot_image_file_size"
    t.datetime "spot_image_updated_at"
    t.integer "occupancy"
    t.index ["host_id"], name: "index_spots_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "firstName", null: false
    t.string "lastName", null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.boolean "host", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "spot_details", "spots"
end
