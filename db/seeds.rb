img1 = open("https://s3.amazonaws.com/development1234/1.png")
img2 = open("https://s3.amazonaws.com/development1234/2.png")
img3 = open("https://s3.amazonaws.com/development1234/3.png")
img4 = open("https://s3.amazonaws.com/development1234/4.png")
coachella = open("https://s3.amazonaws.com/development1234/coachella.png")
future = open("https://s3.amazonaws.com/development1234/future.png")
gardenbot = open("https://s3.amazonaws.com/development1234/gardenbot.png")
minimalistic_shelf = open("https://s3.amazonaws.com/development1234/minimalistic_shelf.png")
party = open("https://s3.amazonaws.com/development1234/party.png")

fashion = open("https://s3.amazonaws.com/development1234/fashion.png")
health = open("https://s3.amazonaws.com/development1234/health.png")
music = open("https://s3.amazonaws.com/development1234/music.png")
outdoors = open("https://s3.amazonaws.com/development1234/outdoors.png")
projects = open("https://s3.amazonaws.com/development1234/projects.png")
technology = open("https://s3.amazonaws.com/development1234/technology.png")
travel = open("https://s3.amazonaws.com/development1234/travel.png")
home = open("https://s3.amazonaws.com/development1234/home.png")


User.destroy_all
Campaign.destroy_all
Category.destroy_all
Contribution.destroy_all
Reward.destroy_all

pl = User.create!(first_name: "Patrycja", password: "password", last_name: "Lupinska", about_me: "I like short stories, hiking, and my parents dog.",
  email: "patrycjalupinska@gmail.com")

l = User.create!(first_name: "Guest", last_name: "User", password: "password", about_me: "I am the best guest you've ever guessed. Here is a haiku: Implicit Return why are you not working here, oh yes javascript. ", email: "guest@gmail.com")

marty = User.create!(first_name: "Marty", last_name: "McFly", password: "password", about_me: "I like Red Vests and Time travel. My funds will benefit the space time continuum.",
  email: "marty@gmail.com")

tom = User.create!(first_name: "Thomas", password: "password", last_name: "Word", about_me: "I like long walks in the park, cabernet, french baguettes and Tolstoy. I also need my fund my addiction to cats.",
  email: "tom@gmail.com")

petty = User.create!(first_name: "Petty", last_name: "Jude", password: "password", about_me: "I need to fund my alter ego Party McFly: the professional sandcastle building action sport explorer from the land to the sea.",
  email: "petty@gmail.com")


Category.create!(cat: "Technology", image: technology)
Category.create!(cat: "Projects", image: projects)
Category.create!(cat: "Travel", image: travel)
Category.create!(cat: "Health & Fitness", image: health)
Category.create!(cat: "Music & Film", image: music)
Category.create!(cat: "Home", image: home)
Category.create!(cat: "Outdoors", image: outdoors)
Category.create!(cat: "Fashion", image: fashion)

categories = [ "Technology", "Projects", "Travel", "Health & Fitness", "Music & Film", "Home","Outdoors", "Fashion"]

pl.campaigns.create!( title: "Cochella Funds", descriptions: "I need to go. Do you ever feel like you have to attend the hottest concert, sporting event or show because you wouldn’t be able to stand it, if everyone was talking about how great it was, and you missed it? Do you have to go, even if the price is outrageous and it means racking up more credit card debt(that's what this is for!)?
Do you feel that you missed out on an incredible adventure when you see your friends posing in front of the Eiffel Tower? Or when you view their incredible safari shots? Or listen to them gush about the fabulous diving trip they took to the Cayman Islands?
Do you feel bad about yourself for not doing those things even though you thoroughly enjoyed your vacation visiting friends in Colorado? Fear not, you can try to fund your jetset lifestyle on IndieFomo.",
  tagline: "Cure my useless experience FOMO", end_date: "Jan-12-2018", target_amount: 1000, image: coachella, category_id: Category.find_by(cat: "Travel").id )

l.campaigns.create!(user_id: l.id, title: "Taco Stand", tagline: "Feed the masses", image: img4,
  descriptions: "Have you ever heard of a taco stand? I bet you have, but this is a taco stand like no other. It will consist of me, my Sakai Takayuki 45-Layer Damascus Hammered Chef Knife, and 3 pieces of plywood. Fund my dreams of being a chef and dig into the best taco stand you've never been to. Make hand tacos after I'm gone. May my legacy live on forever!",
  end_date: "Jan-12-2018", target_amount: 1000, category_id: Category.find_by(cat: "Projects").id)

marty.campaigns.create!(title: "DeLorean time machine", descriptions: "I need to build the flux capacitor. Last night, Darth Vader came from the planet Vulcan and told me that if I didnt take Lorraine out that hed melt my brain. 1.21 JIGA WATTS!!!!! I am Darth Vader from Planet Vulcan!  You're telling me you built a time machine... Out of a DeLorean?!?!", tagline: "Get me back to the future",
  end_date: "July-17-2018", target_amount: 10000, image: future, category_id: Category.find_by(cat: "Technology").id)

pl.campaigns.create!(title: "Plant Bot", descriptions: "Fund my Plant watering Robot, his name is Earl. The word robot usually is used for machines that move about. But consider this... even though it does not move, GardenBot is a robot. It is a robot in the same way a plant is a living organism. It is a slow, quiet robot. It is a robot that is threaded through your house like a plant threads its roots through the soil. GardenBot is formed to fit its function.", tagline: "Never see your plants thirsty",
  end_date: "August-17-2018", target_amount: 10000, image: gardenbot, category_id: Category.find_by(cat: "Technology").id)

tom.campaigns.create!(title: "Williamsburg Loft Party", descriptions: "I missed my best friends party because I was working. The Fomo was great. This funding campaign is my chance to fill the gaping house party void present in my mind. My fear influences the formation of long term goals and self perception.", tagline: "You know you wanna donate. Donation = Invite for 2",
  end_date: "September-18-1991", target_amount: 400, image: party, category_id: Category.find_by(cat: "Home").id)

petty.campaigns.create!(title: "Minimalistic magnetic shelf", descriptions: "Are you tired of being expected to know how to put together furniture? Are you afraid of the amount of leftover hardware from your furniture build attempt? Lucky for you theres
a magnetic shelf to solve all of the problems. Simply glue a large magnet to your wall and hold the shelf up to the magnet. Holds up to 5lbs of weight. Do not allow children to walk under. Shelf does not come with dinasour head, iphone, or plants. We reccomend purchasing styrafoam objects to populate the empty space while simultaneously ensuring no more than 5lbs of weight are applied to the magnet.", tagline: "Less complicated than Ikea",
  end_date: "September-18-1991", target_amount: 400, image: minimalistic_shelf, category_id: Category.find_by(cat: "Home").id)

users = [pl, l, marty, tom, petty]

taco_campaign2 = Campaign.find_by(title: "Taco Stand").rewards.create!(title: "Assortment of 5 Tacos", description: "This assortment of tacos is guaranteed to be the best assortment of tacos you'll ever have. Pork, chicken, avocado and the like. Your tastebuds will be tantilized and your heart will experience deep satisfaction.", price: 100)
taco_campaign3 = Campaign.find_by(title: "Taco Stand").rewards.create!(title: "Chips and Guac", description: "The silkiest and smoothest guacamole you've ever had awaits with only a small donation.", price: 20)

coachella_fund1 = Campaign.find_by(title: "Cochella Funds").rewards.create!(title: "Crochet Socks", description: "Socks made of out organic wool sourced from the Irish countryside. Guaranteed to be the best pair of socks you'll ever own.", price: 100)
coachella_fund2 = Campaign.find_by(title: "Cochella Funds").rewards.create!(title: "Photo of me at Coachella", description: "A photo of me at coachella will bring a smile to your face and tears to your eyes.", price: 150)

shelf1 = Campaign.find_by(title: "Minimalistic magnetic shelf").rewards.create!(title: "Styrafoam Cup", description: "Not just any styrafoam cup, this cup is sculpted and hand painted to resemble a hand carved wooden vase.", price: 100)
shelf2 = Campaign.find_by(title: "Minimalistic magnetic shelf").rewards.create!(title: "Shelf and Peackock Feather", description: "First 50 donors of 500 or more will receive their very own magnetic shelf as well as a peackock feather.", price: 500)

time1 = Campaign.find_by(title: "DeLorean time machine").rewards.create!(title: "Polariod Photo of the future", description: "Landscape polaroids will be taken between the years of 2050 and 2090.", price: 500)
time2 = Campaign.find_by(title: "DeLorean time machine").rewards.create!(title: "One hour trip to 2068", description: "First 100 donors of 1000 or more will receive a trip to 2068. No insurance to be brought, trips are taken at participants own risk", price: 1000)

time1 = Campaign.find_by(title: "Plant Bot").rewards.create!(title: "Soil Moisture Sensor", description: "The moisture sensor will light up when your plants are thirsty.", price: 500)
time2 = Campaign.find_by(title: "Plant Bot").rewards.create!(title: "Solar Panel", description: "A 6V 2W solar panel will be provided with instructions on how to make useful.", price: 1000)

 i = 0

while (i < 60)
  usr = users.sample
  cat = Category.find_by(cat: categories.sample).id
  img = Faker::LoremPixel.image
  amount = [1000, 3000, 5000, 800, 8000, 10000, 500].sample
  title = Faker::Hipster.words(3).join(' ')
  tagline = Faker::Hipster.words(7).join(' ')
  desc = Faker::Hipster.words(100).join(' ')
  end_date = Faker::Date.between(2.weeks.from_now, 1.year.from_now)

  Campaign.create!(image: img, user_id: usr.id, descriptions: desc, category_id: cat, target_amount: amount, title: title, tagline: tagline, end_date: end_date)
  i += 1
end


Campaign.all.each do |campaign|
  usr = users.sample
  amount = [100, 300, 500, 250, 36, 787].sample
  price = [50, 100, 150, 200, 500, 1000].sample
  if (price < campaign.target_amount)
    until price < campaign.target_amount
      price = [50, 100, 150, 200, 500, 1000].sample
    end
  end

  a = campaign.rewards.create!(title: Faker::Hipster.words(2).join(' '), description: Faker::Hipster.words(11).join(' '), price: price)
  Contribution.create!(user_id: usr.id, campaign_id: campaign.id, amount: a.price, reward_id: a.id, date: "May 12 2017")
end
