# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Campaign.destroy_all

p = User.create!(first_name: "Patrycja", password: "password", last_name: "Lupinska", about_me: "happy",
  email: "patrycjalupinska@gmail.com"),
l = User.create!(first_name: "Guest", last_name: "User", password: "password", about_me: "happy",
  email: "guest@gmail.com")

c1 = Campaign.create!(user_id: 18, title: "Cochella Funds", descriptions: "I need to go",
  tagline: "Cure my useless experience FOMO", end_date: "Jan-12-2018", target_amount: 1000)

c2 = Campaign.create!(user_id: 18, title: "Taco Stand", descriptions: "Feed the masses",
  tagline: "Have you ever heard of a taco stand?", end_date: "Jan-12-2018", target_amount: 1000)
