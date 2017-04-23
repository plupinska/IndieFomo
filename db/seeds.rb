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
  email: "patrycjalupinska@gmail.com")

l = User.create!(first_name: "Guest", last_name: "User", password: "password", about_me: "happy",
  email: "guest@gmail.com")

user2 = User.create!(first_name: "Marty", last_name: "McFly", password: "password", about_me: "I like Red Vests and Time travel. My funds will benefit the space time continuum.",
  email: "marty@gmail.com")

p.campaigns.create!( title: "Cochella Funds", descriptions: "I need to go",
  tagline: "Cure my useless experience FOMO", end_date: "Jan-12-2018", target_amount: 1000)

l.campaigns.create!(user_id: l.id, title: "Taco Stand", descriptions: "Feed the masses",
  tagline: "Have you ever heard of a taco stand?", end_date: "Jan-12-2018", target_amount: 1000)

user2.campaigns.create!(title: "DeLorean time machine", descriptions: "I need to build the flux capacitor.", tagline: "Get me back to the future",
  end_date: "July-17-2018", target_amount: 10000)

p.campaigns.create!(title: "Plant Bot", descriptions: "Fund my Plant watering Robot, his name is Earl.", tagline: "Never see your plants thirsty",
  end_date: "August-17-2018", target_amount: 10000)

p.campaigns.create!(title: "Plant Bot", descriptions: "Fund my Plant watering Robot, his name is Earl.", tagline: "Never see your plants thirsty",
  end_date: "August-17-2018", target_amount: 10000)
