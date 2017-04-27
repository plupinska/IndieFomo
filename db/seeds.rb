# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

img1 = open("https://s3.amazonaws.com/development1234/1.png")
img2 = open("https://s3.amazonaws.com/development1234/2.png")
img3 = open("https://s3.amazonaws.com/development1234/3.png")
img4 = open("https://s3.amazonaws.com/development1234/4.png")
cat = open("https://s3.amazonaws.com/development1234/cat.png")
coachella = open("https://s3.amazonaws.com/development1234/coachella.png")
future = open("https://s3.amazonaws.com/development1234/future.png")
gardenbot = open("https://s3.amazonaws.com/development1234/gardenbot.png")
minimalistic_shelf = open("https://s3.amazonaws.com/development1234/minimalistic_shelf.png")
party = open("https://s3.amazonaws.com/development1234/party.png")




User.destroy_all
Campaign.destroy_all
Category.destroy_all
Contribution.destroy_all

pl = User.create!(first_name: "Patrycja", password: "password", last_name: "Lupinska", about_me: "I like short stories, hiking, and my parents dog.",
  email: "patrycjalupinska@gmail.com")

l = User.create!(first_name: "Guest", last_name: "User", password: "password", about_me: "I am the best guest you've ever guessed.",
  email: "guest@gmail.com")

marty = User.create!(first_name: "Marty", last_name: "McFly", password: "password", about_me: "I like Red Vests and Time travel. My funds will benefit the space time continuum.",
  email: "marty@gmail.com")

tom = User.create!(first_name: "Thomas", password: "password", last_name: "Word", about_me: "I like long walks in the park, cabernet, french baguettes and Tolstoy. I also need my fund my addiction to cats.",
  email: "tom@gmail.com")

petty = User.create!(first_name: "Petty", last_name: "Jude", password: "password", about_me: "I need to fund my alter ego Petty McFly: the professional sandcastle building action sport explorer from the land to the sea.",
  email: "petty@gmail.com")


Category.create!(cat: "Technology")
Category.create!(cat: "Projects")
Category.create!(cat: "Travel")
Category.create!(cat: "Health & Fitness")
Category.create!(cat: "Film")
Category.create!(cat: "Home")
Category.create!(cat: "Outdoors")
Category.create!(cat: "Fomo")


pl.campaigns.create!( title: "Cochella Funds", descriptions: "I need to go",
  tagline: "Cure my useless experience FOMO", end_date: "Jan-12-2018", target_amount: 1000, image: coachella, category_id: Category.find_by(cat: "Travel").id )

l.campaigns.create!(user_id: l.id, title: "Taco Stand", tagline: "Feed the masses", image: img4,
  descriptions: "Have you ever heard of a taco stand? I bet you have, but this is a taco stand like no other. It will consist of me, my Sakai Takayuki 45-Layer Damascus Hammered Chef Knife, and 3 pieces of plywood. Fund my dreams of being a chef and dig into the best taco stand you've never been to. ",
  end_date: "Jan-12-2018", target_amount: 1000, category_id: Category.find_by(cat: "Projects").id)

marty.campaigns.create!(title: "DeLorean time machine", descriptions: "I need to build the flux capacitor.", tagline: "Get me back to the future",
  end_date: "July-17-2018", target_amount: 10000, image: future, category_id: Category.find_by(cat: "Technology").id)

pl.campaigns.create!(title: "Plant Bot", descriptions: "Fund my Plant watering Robot, his name is Earl.", tagline: "Never see your plants thirsty",
  end_date: "August-17-2018", target_amount: 10000, image: gardenbot, category_id: Category.find_by(cat: "Technology").id)

tom.campaigns.create!(title: "Williamsburg Loft Party", descriptions: "I missed my best friends party because I was working. The Fomo was great. This funding campaign is my chance to fill the gaping house party void present in my mind.", tagline: "You know you wanna donate. Donation = Invite for 2",
  end_date: "September-18-1991", target_amount: 400, image: party, category_id: Category.find_by(cat: "Fomo").id)

petty.campaigns.create!(title: "Minimalistic magnetic shelf", descriptions: "Are you tired of being expected to know how to put together furniture? Are you afraid of the amount of leftover hardware from your furniture build attempt? Lucky for you theres
a magnetic shelf to solve all of the problems. Simply glue a large magnet to your wall and hold the shelf up to the magnet. Holds up to 5lbs of weight. Do not allow children to walk under.", tagline: "Less complicated than Ikea",
  end_date: "September-18-1991", target_amount: 400, image: minimalistic_shelf, category_id: Category.find_by(cat: "Home").id)


Contribution.create!(user_id: pl.id, campaign_id: Campaign.find_by(title: "DeLorean time machine").id , amount: 40)
Contribution.create!(user_id: pl.id, campaign_id: Campaign.find_by(title: "Plant Bot").id , amount: 100)
Contribution.create!(user_id: pl.id, campaign_id: Campaign.find_by(title: "Williamsburg Loft Party").id , amount: 5)
Contribution.create!(user_id: petty.id, campaign_id: Campaign.find_by(title: "Taco Stand").id , amount: 257)
Contribution.create!(user_id: petty.id, campaign_id: Campaign.find_by(title: "Cochella Funds").id , amount: 98)
Contribution.create!(user_id: l.id, campaign_id: Campaign.find_by(title: "Minimalistic magnetic shelf").id , amount: 40)
Contribution.create!(user_id: l.id, campaign_id: Campaign.find_by(title: "Plant Bot").id , amount: 87)
