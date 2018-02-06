# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def new_datetime
  return Time.now.plus_with_duration(10345678+((rand*10).round*1000000))
end

User.create!(name: "Demo_User", email: "demo@quickstarter.com", password: "password");
User.create!(name: "Ashil", email: "Ashil@ashil.com", password: "password");
User.create!(name: "Andy", email: "andy@aa.com", password: "password");
User.create!(name: "Okonzu", email: "Okonzu@hotmail.com", password: "password");
User.create!(name: "Mustafa", email: "Mustafa@hotmail.com", password: "password");
User.create!(name: "Snoop Dogg", email: "snoop@bigblunt.com", password: "password");

Project.create!(title: "Test",
  short_blurb: "blurb",
  description: "description",
  funding_amount: 1,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/4gPJoG6.jpg",
  category: "Art",
  user_id: 1
);
Project.create!(title: "Yotel",
  short_blurb: "Hotels and motels are artifacts of the past, behold, our new creation, a Yotel",
  description: "Hotels and motels succeeded in the circumstances of the past.  In an era where automobile ownership was spreading around the US, they presented affordable family accomodations for vacationers.  However, in more recent times, peer-to-peer services and the sharing economy have introduced such alternatives such as AirStayAndSee and WaterBnB.  In light of today's new competitive market and the changing tastes of millenial vacationers, a new form of competitive accomodations are needed necessitating the creation of our Yotel.",
  funding_amount: 1000000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/4gPJoG6.jpg",
  category: "Technology",
  user_id: 2
);
Project.create!(
  title: "Snowball Maker",
  short_blurb: "We have invented a new snowball maker to allow
  children to make snowballs.",
  description: "As global warming looms on the horizon, leading
  scientists warn about significantly higher temperatures in the future.
  The increased temperatures could prevent snow from forming during the
  winter in some locations.  Humanity risks losing the art of snowball
  making if we do not act now to preserve our heritage.
    We must act now to save this precious part of our culture.  I appeal
  to you so that we may raise money to manufacture tools for our children
  to create snowballs.  Ws must act now!",
  funding_amount: 8444,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/sD7KdpV.jpg",
  category: "Technology",
  user_id: 3
);
Project.create!(
  title: "Giant Candy",
  short_blurb: "How can our children solve the big problems of tomorrow
  if all they are familiar with today is small things?",
  description: "The world feels more connected today than in the past.
  The problems we are concerned with have a more global scope.  In order
  to inspire the children of today to think big, and be prepared to solve
  the problems of the future, we must acclimitate them to big things.
    That is why we have invented BIG Candy!!!  Kids love candy and getting
  them excited about something they are familiar with will prepare them
  to solve tomorrow's big problems.",
  funding_amount: 1000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/DckXqBn.jpg",
  category: "Food",
  user_id: 3
);
Project.create!(
  title: "Big Lighter",
  short_blurb: "Bigger lights for bigger blunts",
  description: "The deregulation of marijuana has spawned an arms-race
  between newly created dispensaries.  Each is contending to roll the
  dankest, fattest blunts.  However, despite the gargantuan increases
  in size achieved by these contenders, lighter technology has failed
  to keep pace with the ever increasing size of these blunts.
    Participants are left unsatisfied as several minutes are taken just
  to light these monstrosities.  The amount of time required has left
  clients unsatisfied and the risks of industry collapse are present
  unless a solution is quickly introduced.
    My associates and I, have recently envisioned a new technology to
  solve this problem: a BIG lighter.  Now we need funding to enable
  us to share this invention with the You!",
  funding_amount: 750000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/adyrbjz.jpg",
  category: "Technology",
  user_id: 6
);
Project.create!(
  title: "An Investigation Into Hidden Art on San Francisco Streets",
  short_blurb: "What art is hiding on our city streets...?",
  description: "In the pockets and alleyways of San Francisco,
  there exist hidden art that has not been brought to the public's
  awareness.  This project would fund a picture book showing these gems
  to interested viewers around the world!",
  funding_amount: 999,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/2gbqrPn.jpg",
  category: "Art",
  user_id: 5
);
