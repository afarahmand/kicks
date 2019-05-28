FactoryBot.define do
  factory :user do
    email
    name {"Jory Carver"}
    password {"password"}
    password_digest {BCrypt::Password.create("password")}
    image_url {"https://i.imgur.com/rfxjQeS.png"}
  end

  factory :project do
    association :user
    title
    short_blurb {"I'm eh putting together some funds for eh bad weather..."}
    description {"During the winter, the weather can get very bad.  \nWe need to put together some funds to allow us to prevent the weather from negatively affecting \npeople's livelihoods and commutes.  The more money we raise, the better and more secure our constituents will be."}
    funding_amount {10000}
    funding_end_date {Time.current + 3.months}
    image_url {"https://i.imgur.com/c1VXFGK.jpg"}
    category {%w(Art Fashion Film Food Games Technology).sample}
  end

  factory :reward do
    association :project
    title {"A Trinket"}
    description {"Some junky thing"}
    amount
  end

  factory :backing do
    association :reward
    association :user
  end

  sequence :email do |n|
    "email#{n}@email.com"
  end

  sequence :title do |n|
    "Slush Fund #{n}"
  end

  sequence :amount do |n|
    1000+n*1000
  end
end
