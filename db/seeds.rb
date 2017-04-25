# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Campaign.destroy_all
Category.destroy_all

pl = User.create!(first_name: "Patrycja", password: "password", last_name: "Lupinska", about_me: "An inquisitive mind, I like reading and seeing my parents dog run around in the snow..",
  email: "patrycjalupinska@gmail.com")

l = User.create!(first_name: "Guest", last_name: "User", password: "password", about_me: "I am the best guest you've ever guessed.",
  email: "guest@gmail.com")

marty = User.create!(first_name: "Marty", last_name: "McFly", password: "password", about_me: "I like Red Vests and Time travel. My funds will benefit the space time continuum.",
  email: "marty@gmail.com")

tom = User.create!(first_name: "Thomas", password: "password", last_name: "Word", about_me: "I like long walks in the park, cabernet, french baguettes and Tolstoy. I also need my fund my addiction to cats.",
  email: "tom@gmail.com")

petty = User.create!(first_name: "Petty", last_name: "Jude", password: "password", about_me: "I need to fund my alter ego Petty McFly: the professional sandcastle building action sport explorer from the land to the sea.",
  email: "petty@gmail.com")

cat = User.create!(first_name: "Marty", last_name: "McFly", password: "password", about_me: "I like Red Vests and Time travel. My funds will benefit the space time continuum.",
  email: "cat@gmail.com")

Category.create!(type: "Technology")
Category.create!(type: "Projects")
Category.create!(type: "Travel")
Category.create!(type: "Health & Fitness")
Category.create!(type: "Film")
Category.create!(type: "Home")
Category.create!(type: "Outdoors")

pl.campaigns.create!( title: "Cochella Funds", descriptions: "I need to go",
  tagline: "Cure my useless experience FOMO", end_date: "Jan-12-2018", target_amount: 1000, image: image_url('coachella.png'), category_id: Category.find_by(type: "travel").id )

l.campaigns.create!(user_id: l.id, title: "Taco Stand", descriptions: "Feed the masses", image: image_url('4.png'),
  tagline: "Have you ever heard of a taco stand? I bet you have, but this is a taco stand like no other. It will consist of me, my Sakai Takayuki 45-Layer Damascus Hammered Chef Knife, and 3 pieces of plywood. Fund my dreams of being a chef and dig into the best taco stand you've never been to. ",
  end_date: "Jan-12-2018", target_amount: 1000)

marty.campaigns.create!(title: "DeLorean time machine", descriptions: "I need to build the flux capacitor.", tagline: "Get me back to the future",
  end_date: "July-17-2018", target_amount: 10000, image: image_url('future.png'))

pl.campaigns.create!(title: "Plant Bot", descriptions: "Fund my Plant watering Robot, his name is Earl.", tagline: "Never see your plants thirsty",
  end_date: "August-17-2018", target_amount: 10000, image: image_url('gardenbot.png'))

tom.campaigns.create!(title: "Williamsburg Loft Party", descriptions: "I missed my best friends party because I was working. The Fomo was great. This funding campaign is my chance to fill the gaping house party void present in my mind.", tagline: "You know you wanna donate. Donation = Invite for 2",
  end_date: "September-18-1991", target_amount: 400, image: image_url('party.png'),)

petty.campaigns.create!(title: "Minimalistic magnetic shelf", descriptions: "I missed my best friends party because I was working. The Fomo was great. This funding campaign is my chance to fill the gaping house party void present in my mind.", tagline: "You know you wanna donate. Donation = Invite for 2",
  end_date: "September-18-1991", target_amount: 400, image: image_url('minimalistic_shelf.png'))
