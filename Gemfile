source "https://rubygems.org"
ruby "3.4.4"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "coffee-rails"
gem "jquery-rails"
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "7.2.2.1"
# Use postgresql as the database for Active Record
gem "pg"
# Use Puma as the app server
gem "puma"
# Use SCSS for stylesheets
gem "sassc-rails"
# Use Uglifier as compressor for JavaScript assets
gem "uglifier"
# See https://github.com/rails/execjs#readme for more supported runtimes

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder"
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
gem "bcrypt"
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
gem "date_validator"

group :development, :test do
  gem "annotate"
  gem "better_errors"
  gem "binding_of_caller"
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem "capybara"
  gem 'capybara-screenshot'
  gem "factory_bot_rails"
  gem "pry-rails"
  gem "selenium-webdriver"
end

group :development do
  gem "listen"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-watcher-listen"
  gem "guard", :require => false
  gem "guard-livereload",  :require => false
  gem "rack-livereload"
  gem "rb-fsevent",        :require => false
  gem "rb-readline"
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem "web-console"
end

group :test do
  gem "database_cleaner"
  gem "rspec"
  gem "rspec-rails"
  gem "shoulda-matchers"
  gem "webdrivers"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
