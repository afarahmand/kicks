# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name: "Demo User", email: "demo@quickstarter.com", password: "password", image_url: "https://i.imgur.com/rfxjQeS.png");
User.create!(name: "Ashil", email: "Ashil@ashil.com", password: "password", image_url: "https://i.imgur.com/rfxjQeS.png");
User.create!(name: "Andy", email: "andy@aa.com", password: "password", image_url: "https://i.imgur.com/rfxjQeS.png");
User.create!(name: "Okonzu", email: "Okonzu@hotmail.com", password: "password", image_url: "https://i.imgur.com/rfxjQeS.png");
User.create!(name: "Stacey", email: "stacey@hotmail.com", password: "password", image_url: "https://i.imgur.com/64m6a68.jpg"); # 5
User.create!(name: "Snoop Dogg", email: "snoop@bigblunt.com", password: "password", image_url: "https://i.imgur.com/zVXIPlX.png");
User.create!(name: "Alice", email: "alice@home.com", password: "password", image_url: "https://i.imgur.com/rfxjQeS.png");
User.create!(name: "Elon Musk", email: "elon@spacex.com", password: "password", image_url: "https://i.imgur.com/xUF2EjU.png");
User.create!(name: "Miles Dyson", email: "mdyson@cyberdyne.com", password: "password", image_url: "https://i.imgur.com/WrSbVcw.jpg");
# - - - - - - - - - - - - - - - - - -  PROJECTS - - - - - - - - - - - - - - - - - -
def new_datetime
  return Time.now.plus_with_duration(10345678+((rand*10).round*1000000))
end

Project.create!(title: "Let's Go To Mars",
  short_blurb: "We're putting together some funding for a manned mission to Mars...now, you too can
  contribute, exclusively, through Quikstarter!",
  description: "The first Space Race ignited American interest in science and mathematics
  on an unprecented scale.  However, interest has recently waned.  The world could benefit
  from another Space Race.  That is why I am proposing this trip to Mars.
    We are planning to coordinate with other space agencies around the world to determine
  how we can integrate different science experiments together with our launch vehicle.
  We are in the preliminary stages of planning our launch window.  The funding goal is
  an estimate of the cost for traveling to Mars.  If we overshoot our goal by enough,
  I'm down to go to Saturn instead.",
  funding_amount: 999999999,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/c1VXFGK.jpg",
  category: "Technology",
  user_id: 7
);
Project.create!(title: "What Happened to Mario?",
  short_blurb: "Mario had disappeared and is nowhere to be found! We
  need to raise funds to find him now!",
  description: "Mario needs no introduction.  He has risked his life
  (err..multiple of his 'lives') in order to protect us from Bowser's
  onslaught.  When the onslaught of Koopa's rising out of sewers
  overwhelmed the authorities, Mario was there.  When cannon fire
  was happening all around, Mario marched on.  When a dinosaur ended up
  on his path, he didn't turn away and flee, he rode that dinosaur.
  Now, he needs us.  We can't turn our backs.
    We are currently raising funds to sponsor Luigi on a quest to find
  and rescue Mario.  Normally, we raise funds in $.  However, for this
  particular project, we will be converting all funds to gold coins.",
  funding_amount: 9999,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/lqPBmM1.jpg",
  category: "Games",
  user_id: 6
);
Project.create!(title: "We Need a Security System to Watch Over and Protect Us",
  short_blurb: "In today's world, we need a secure surveillance system
  to monitor potential dangers.  What do you guys think about naming it Skynet?",
  description: "Today's world feels increasingly dangerous.  Risks appear to
  be lurking from every corner.  People are more and more anxious and uncomfortable
  in places where they previously felt safe.
    We are proposing to build a safe and secure system to watch over us.
  Some people have raised questions about privacy.  Nonsense, the system will be
  completely secure.  It will be like a big brother watching over you.",
  funding_amount: 350000000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/0DKWCB6.jpg",
  category: "Technology",
  user_id: 9
);
Project.create!(title: "California Regional Bullet Train",
  short_blurb: "California roads are often ranked most congested in the nation.
  California needs a means to alleviate this congestion.",
  description: "California high speed rail has been touted by politicians as
  a solution to our traffic crisis.  However, it seems that details around
  cost always torpedo the conversation.
    This Quikstarter project seeks to resolve the gridlock.  I know it is
  a longshot but I'm willing to put some of my hard-earned money toward this
  important task and I hope you will too.  If every American were to
  contribute $1, this project will be fully funded.",
  funding_amount: 350000000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/lz3zq0m.jpg",
  category: "Technology",
  user_id: 6
);
Project.create!(title: "Shadow Animals - Are Our Kids Learning a Popular Pasttime?",
  short_blurb: "Technological advances have expanded leisure options.
  However, have these advances diminished play with shadow animals?",
  description: "In the past, before electronic entertainment became widespread,
  children used to enjoy playing games with shadow animals.  However, this form
  of play is rapidly being forgotten.  If we do not act quickly and take away
  the video games from our children, they will never know the joy of playing
  with imaginary animals.
    This project seeks to raise awareness about the dangers of laxity at this precious
  crossroads.  It is not too late.  If we act now, we can preserve this important
  pasttime.  If we gather enough supporters, I propose starting an awareness campaign
  aronud the country to alert people to this hidden menace.",
  funding_amount: 350,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/H4vNtw4.jpg",
  category: "Games",
  user_id: 1
);
Project.create!(title: "Help!, I Lost My Life Savings!",
  short_blurb: "I went to the casino with friends.  It hit red 8 times
  in a row.  I knew it would hit black, so I bet.",
  description: "I know what I did was stupid but it was an honest mistake.  Ya'll
  got to help me out.  My wife would kill me if she found out.  I've gone
  broke only 3 times before when playing cards so it is not like this happens all of
  the time.  I was just on a bad streak of luck that day.  I'm sure I will be able to
  win it back.
    Yeah, it is true.  I still owe Barry from a few weeks back.  Yeah, no worries.  Of
  course I'm good for it.  I just wanted to let you all know that I would really
  appreciate the bailout right now.  Thanks.",
  funding_amount: 4000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/edmsdAz.jpg",
  category: "Games",
  user_id: 1
);
Project.create!(title: "A 100-Sided Dice",
  short_blurb: "We have 4-sided, 6-sided, 8-sided, and 20-sided.  Why
  stop now? Let's just go for a cool 100.",
  description: "RPGs are tons of fun.  Different actions require dice with
  different numbers of sides.  It would be very useful to have a die that we
  could use to calculate percentages.  That, and it would be totally rad
  if I could have a 100-sided one.
    So, uh, this dude at the local shop told me if I brought him 900 in cash,
  he would hook me up with a 100-sided his dad had frm long ago.  I asked him
  to show me but he said it was up in the attic and he isnt going to take
  it down unless he I was buying.  So, yeah, as you can tell, this is
  pretty important and I hope you support my project.",
  funding_amount: 900,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/6z0REeH.jpg",
  category: "Games",
  user_id: 1
);
Project.create!(title: "Wind Turbines - Protection from Volatile Energy Prices",
  short_blurb: "We must use our natural resources to power our nation to ensure
  our long-term prosperity",
  description: "Wind power is abundant but underutilized in our country.  Turbines
  require little to no operating costs and are practically free energy after they
  are installed.
    A little known program in West Virginia had utility companies pay people to
  install turbines on their land.  This has positively impacted poverty in high
  unemployment areas.  This program could be replicated here and achieve the same
  success.  However, the political grid lock is preventing meaningful change from
  occurring.
    I plan to use the money raised for this project to spread awareness about the
  benefits of wind energy.  Furthermore, funds will support activites that encourage
  politicians to enact laws that promote wind energy.",
  funding_amount: 400,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/Pus158W.jpg",
  category: "Technology",
  user_id: 1
);
Project.create!(title: "Teleworking - An Answer to The Commuting Nightmare?",
  short_blurb: "Ever since the Internet, a future of teleworking
  has filled sci-fi stories.  However, it has not achieved popularity as predicted",
  description: "Statistics indicate that automobile accidents are one of
  the major causes of death in the US.  America's driving culture also
  has many associated costs including vehicle maintenance and insurance
  which increase the cost of driving considerably.  We would benefit greatly
  if we could reduce the amount of people on the road.
    This project proposes to mobilize an awareness campaign to promote the benefits
  of telework and to communicate the information to companies so that they may make
  the best decision for their companies, employees, and the roadways.",
  funding_amount: 400,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/Imj3DzA.jpg",
  category: "Technology",
  user_id: 3
);
Project.create!(title: "Architectural Improvements to Beautify Urban Areas",
  short_blurb: "You ever seen a nice waterway and thought, 'Couldn't I make
  my home town just as cool by simply flooding the streets?'",
  description: "If you have asked yourself this, and other insightful questions,
  then you absolutely need to support this project.  In this film, we explore
  engineering marvels and the lessons learned from building such stupendous
  creations.  After our expert analysis, we have determined a solid series
  of steps to achieve similar success.  We have released some snippets from
  our insights to entice your support.  There is high demand for waterfront property
  which allows owners to charge high rents for its use.  However, for normal
  folk, it is too expensive to buy.  Therefore, we recommend that astute buyers
  buy into property on a flood plain.  After all, today's flood plain is tomorrow's
  waterfront property!",
  funding_amount: 3000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/D9y1ZRs.jpg",
  category: "Film",
  user_id: 5
);
Project.create!(title: "Colorful Buildings: Let's Paint the Rest of the City!!!",
  short_blurb: "Bright colorful buildings will help revitalize our locale.",
  description: "The nicest spots in the city tend to be the most colorful.
  The vivid colors uplift the spirits of the people and bring in tourists.
  By making our city a more desireable location to live, we can raise the
  quality of life of our constituents and make our local waterway more enjoyable.",
  funding_amount: 400000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/YQ2VUTa.jpg",
  category: "Art",
  user_id: 7
);
Project.create!(title: "Zombie Milkshake",
  short_blurb: "In this artistic masterpiece, Okonzu illustrates zombies in opposition to the conventional view.",
  description: "The artist, Okonzu, forces us to question our long-held
  views on zombies.  Perhaps, when there are no humans around, they are
  not so different than you and me.  In this piece, Okonzu's art transcends
  science fiction and causes us to search inside ourselves to determine
  whether we truly treat people fairly or whether we just allow our
  long-held beliefs to prevent us from seeing things in a different light.
    Okonzu has generously made these original prints available to our
  supporters.  With the raised funds, we intend to sponsor inter-cultural
  awareness programs to inculcate appreciation for diversity.",
  funding_amount: 750,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/I7bCa2d.jpg",
  category: "Art",
  user_id: 2
);
Project.create!(title: "Art is Change!: A Movement to Uplift our People",
  short_blurb: "Over the last several years, funding for art programs
  has continuously been cut thereby depriving people of their cultural heritage.",
  description: "Art is love, art is life...without art, we would have far
  more limited means to express ourselves.  Art also serves as a means for
  people to identify with their culture.
    We are supporters to fund a program to offer increased artistic opportunities
  to inner-city students.  Without after-school art programs, these kids
  would have have nothing to do other than getting in trouble hanging out
  in the streets.  We are planning to start running programs at 2 local
  schools then expanding from there once we verify that the intended results
  are achieved.",
  funding_amount: 14325,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/4Lf4FrU.jpg",
  category: "Art",
  user_id: 2
);
Project.create!(title: "Body Art: A Celebration of Tattooing Through the Years",
  short_blurb: "Tattooing has gone from a subculture to gaining widespread
  acceptance...however, not any people are aware of its history.",
  description: "Tattooing was introduced to the Western world when Captain Cook
  visited Tahiti and New Zealand in 1769.  One of his associates recorded
  journal entries describing the body modifications of the islanders referring
  to them as 'tattaw'.  Soon afterwards, the practice of tattooing became popular
  among sailors taking several years before achieving more widespread popularity.
    I am seeking backers to fund a book I intend to publish describing the history
  of tattooing as well as a comparative study exploring the use of tattooing in
  different cultures.",
  funding_amount: 750,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/a0STbkn.jpg",
  category: "Art",
  user_id: 2
);
Project.create!(title: "Jungle Style: Sharing Fashions from Exotic Locales",
  short_blurb: "So you just take a picture of me, post it on Quikstarter and people give you money?",
  description: "Do I really have to wear this silly outfit? Oh, it's style you say?
  Do you really think my picture alone will interest people in this project? What
  exactly do you plan on doing with the money you raise? Don't ask too many
  questions? Ok, cool whatever...let's just take some pictures.  This palm
  tree is getting in my way!",
  funding_amount: 3500,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/Mn6MhFI.jpg",
  category: "Fashion",
  user_id: 2
);
Project.create!(title: "Why Is He Ignoring Me..",
  short_blurb: "A book describing what is fashionable and what is not, and you can bet that it is not the Lakers!",
  description: "In the past, people experienced more interaction with others.  In today's interconnected world,
  some people can go days without seeing anyone else by doing life's necessary tasks online.  Increasingly isolated,
  people are more out-of-touch with today's latest fashions than ever before.  You may scoff at this statement and
  express that fashions can be looked at online as well but you would be wrong.
    The online world is far too democratic allowing anyone to equally opine about fashion.  However,
  everyone's opinion is not equally valuable.  Some fields require expert knowledge about a subject.
  That is why I have decided to start this project.  By raising our goal amount, we will be able to confer
  with fashion experts around the world and receive their expert advice with regard to the modern world.
  We will then be able to disseminate this knowledge to you via email.",
  funding_amount: 7000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/G3THkWb.jpg",
  category: "Fashion",
  user_id: 7
);
Project.create!(title: "Sunglasses",
  short_blurb: "The perfect accessory whether rain or shine!",
  description: "Check this out my fellow Quikstartians! The coolest sunglasses ever
  made have been newly introduced, exclusively, to you folks on Quikstarter!!!
  These state-of-the-art polyflex carbonate lenses fitted into this high-tech
  composite frame is everything you could have dreamed of and more!
    These shades are great whether sunny or shady.  I mean check out my picture...
  yeah, buddy, up here...you are going to have to scroll a little bit more.  Ok,
  now do you see what I was talking about?  You ready to support this project so
  I can start making these babies on the manufacturing line?",
  funding_amount: 3500,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/d46h9tP.jpg",
  category: "Fashion",
  user_id: 5
);
Project.create!(title: "Compact Makeup Kit: A Posh Girl's Perfect Travel Accessory!",
  short_blurb: "A makeup kit for girls on the go...stores all of your brushes and balms in a compact case",
  description: "Makeup kits are typically available at different malls and stores.  However
  these kits tend to be poorly constructed and fail to adequately secure all of the different
  items within the kit.  Although they initially appear sufficient, purchases quickly learn otherwise
  once their items fall out of their fasteners and the material discolors.
    This revolutionary makeup kit is both hip and high quality.  It is made of the finest
  leather shipped in from Argentina ensuring longevity.  Furthermore, it includes hand-made
  fasteners to ensure that your items do not become insecure while traveling.  We are so confident
  in its success that we are offering a life-time warranty to supporters.
    If our project succeeds in raising the target amount, we will hire local artisans
  to begin crafting an initial production run of these kits.",
  funding_amount: 14999,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/b6IpulA.jpg",
  category: "Fashion",
  user_id: 3
);
Project.create!(title: "Fashionable Futbol",
  short_blurb: "The first soccer cleat that is designed to look pretty",
  description: "Since the earliest times, cleats have been solely (pun intended) designed with functionality
  in mind.  However, designers have failed to account for the large market of people that
  want to wear cleats just because they are fashionable.
    Soccer culture arises powerfully every 4 years around World Cup time.  Large swathes of people,
  that were otherwise uninterested in soccer, go out and shop for soccer related gear.
  We are uniquely positioned to meet this unanswered demand.  We look forward to having
  you on board as a partner in this process",
  funding_amount: 6000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/oZFMpPE.jpg",
  category: "Fashion",
  user_id: 3
);
Project.create!(title: "On the Catwalk: All Secrets About Modeling, Revealed",
  short_blurb: "This book includes exclusive one-on-one interviews with the world's top models",
  description: "After the runwaway success of 'Wild in the West Wing', Andy is back with this new
  book.  In this book, we conduct a series of exclusive interviews with the world's
  top models.  Only through our carefully-tailored industry connections were we able to
  schedule these interviews with these otherwise difficult to find people.  Now we want to
  bring these secrets to you and also impart knowledge of how to survive the competitive
  modeling industry.",
  funding_amount: 2000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/pp5GHXJ.jpg",
  category: "Fashion",
  user_id: 2
);
Project.create!(title: "Clean and Simple Beachwear",
  short_blurb: "Sand repellent tote bag and shoes",
  description: "People love going to the beach.  It is fun, warm, and there are waves.
  Although, it is usually much fun, the trouble caused by the sand can be a real downer.
  Sand, it's coarse and rough and irritating and it gets everywhere.
    Enjoy the sand without letting it irritate you with our new sand repellent tote bag
  and shoes.  Our materials are made with a special, composite material which leaves the
  everything feeling soft and smooth.  With enough funds to meet our target, we intend
  to explore further research options for applying this sand repellent material to other
  clothing.",
  funding_amount: 40000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/HR0fAn0.jpg",
  category: "Fashion",
  user_id: 1
);
Project.create!(title: "Deforestation: The Epidemic Infecting our Rainforests",
  short_blurb: "Despite numerous international treaties, worldwide logging continues at an accelerating pace",
  description: "We have partnered with local South Americans to get an inside look at the logging industry.
  What we have found will amaze you.  Logging is often touted as a job scheme for native populations,
  however, our findings indicate that these economic oppotunities provide largely short-term benefits,
  often leaving the local populations worse off than before the logging began.  The environemntal
  devastation that uncontrolled logging unleashes on the world is often ignored, but is clearly
  shown in the documentary film footage our crew has captured.
    If we reach our target funding goal, we will began editing our raw film into a documentary.
  We intend to bring to light the hidden workings of the logging industry.",
  funding_amount: 40000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/3ocrXKM.jpg",
  category: "Film",
  user_id: 1
);
Project.create!(title: "Not So Primitive Technology",
  short_blurb: "All of the things you wish the Primitive Technology guy
  doesn't say because he hasn't made a microphone yet",
  description: "Dude, I'm totally stoked! I've been pursuing the Primitive
  Technology dude for several years now and I think that I am close to him.
  Many of you have expressed interest in hearing him speak. So I finally decided
  that I would search for, find him, then communicate those experiences with
  you all.
    I am currently near a forested part of Australia having tracked this elusive
  gatherer here.  I anticipate needing more funds so I can support myself while
  on this quest.  I will update you guys on my progress.",
  funding_amount: 3000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/hta71xA.jpg",
  category: "Film",
  user_id: 6
);
Project.create!(title: "Emu Eggs - If You Haven't Seen These Before, Check Them Out",
  short_blurb: "You may not believe me but you can actually eat these.  You should
  try one sometime.",
  description: "Most people are closely familiar with the standard chicken egg.  However,
  people usually don't realize that chickens and all related animals also lay edible eggs.
  The egg-laying chicken family, in descending order of egg-size, is comprised of ostriches,
  emus, cassowaries, chickens, geese, and quails.  It is said that the emu egg contains the
  volume of approximately 8 chicken eggs but with proportionally more yolk but lower
  cholesterol.
    It is our goal to spread awareness of emu eggs and the potential health benefits of
  consuming this more nutritious bird.",
  funding_amount: 4600,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/YfTvRdi.jpg",
  category: "Food",
  user_id: 1
);
Project.create!(title: "Pineapples",
  short_blurb: "Why did we give them that name? I mean they are nothing like apples.
  And pine...what, the tree?",
  description: "This project will fund a research project to determine whether
  we should rename the pineapple to a something more appropriate.  It has nothing
  to do with pine and nothing to do with apples.
    Before undertaking such a monumental task, we should probably confer with other
  societies around the world and learn what word they use for 'pineapple'.  Maybe
  could just borrow their word instead of making up our own?",
  funding_amount: 2882,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/13wfBJZ.jpg",
  category: "Food",
  user_id: 7
);
Project.create!(title: "Mmmm....How About a Nice Juicy Steak...",
  short_blurb: "We raise organic, free-range, antibiotic-free beef cattle.
  We are exploring how taste changes based on animal treatment.",
  description: "Most livestock owners attempt to optimize meat yield.  However,
  farmers tend to overlook taste in their calculation.  We are pursuing a research
  project to see how the treatment of the animal effects the taste of the meat.
    This project will span multiple continents to see if different species of
  cattle react differently to the varying conditions.  We have establish
  relationships with small farms ranging from China to South America to
  participate in the project.",
  funding_amount: 5000,
  funding_end_date: new_datetime(),
  image_url: "https://i.imgur.com/8IapLUy.jpg",
  category: "Food",
  user_id: 3
);





Project.create!(title: "Yotel",
  short_blurb: "Hotels and motels are artifacts of the past, behold, our new creation, a Yotel",
  description: "Hotels and motels succeeded in the circumstances of the
  past.  In an era where automobile ownership was spreading around the
  US, they presented affordable family accommodations for vacationers.
  However, in more recent times, peer-to-peer services and the sharing
  economy have introduced such alternatives such as AirStayAndSee and
  WaterBnB.  In light of today's new competitive market and the changing
  tastes of millennial vacationers, a new form of competitive
  accomodations are needed necessitating the creation of our Yotel.",
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
  to create snowballs.  We must act now!",
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
# - - - - - - - - - - - - - - - - - -  REWARDS - - - - - - - - - - - - - - - - - -
project_idx = 1
while project_idx <= 30
  Reward.create!(
    title: "A Pittance",
    amount: 1,
    description: "You will receive a token thank you email to express appreciation for your token support.",
    project_id: project_idx
  );
  Reward.create!(
    title: "A Thank You Card",
    amount: 10,
    description: "You will receive a signed thank you card expressing our sincere appreciation for your support.",
    project_id: project_idx
  );
  Reward.create!(
    title: "Insider Tracking",
    amount: 100,
    description: "You will receive personalized updates about our progress as well as an inside view of our initiatives before public release.",
    project_id: project_idx
  );
  Reward.create!(
    title: "Early Access",
    amount: 1000,
    description: "You will earn priority access upon completion.  We want you to be able to appreciate the results of our work before we share it with the public because of your generous support.",
    project_id: project_idx
  );

  project_idx+=1
end

# - - - - - - - - - - - - - - - - - -  BACKINGS - - - - - - - - - - - - - - - - - -
def rand_funding_percentage
  funding_level = (rand*3).floor

  if funding_level == 2
    return 0.7
  elsif funding_level == 1
    return 0.3
  end

  return 0.0
end

project_idx = 1
while project_idx <= Project.count
  # Determine random funding level [0%, 30%, 70%]
  target_funding_perc = rand_funding_percentage
  users_remaining = ([*1..User.count] - [Project.find(project_idx).user_id]).shuffle

  target_funding_level = Project.find_by(id: project_idx).funding_amount*target_funding_perc
  curr_funding_level = 0

  # Until reach funding level (or all users have backed), keep adding random rewards, user in order
  until users_remaining.empty? || curr_funding_level > target_funding_level
    reward = (rand*4).floor
    curr_funding_level+=10**reward

    Backing.create!(
      user_id: users_remaining.shift,
      reward_id: (4 * (project_idx - 1)) + (reward + 1)
    )
  end

  project_idx+=1
end
