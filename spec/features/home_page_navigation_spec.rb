require "rails_helper"
include ApplicationHelper

def sign_in
  visit("/")
  click_on "Sign in"
  click_on "Sign In as Demo User"
end

RSpec.feature "navigation from home page", js: true do
  context "signed in" do
    scenario "views home page links" do
      user = create(:user)
      sign_in
      expect(page).to have_link 'Explore'
      expect(page).to have_link 'Start a project'
      expect(page).to have_link 'Search'
      expect(page).to have_button 'Sign out'
      expect(find_link("Explore")['href']).to eq("http://localhost:3000/#/discover")
      expect(find_link("Start a project")['href']).to eq("http://localhost:3000/#/projects/new")
      expect(find_link("Search")['href']).to eq("http://localhost:3000/#/search")
      expect(find_button("Sign out").present?).to eq(true)
    end

    scenario "user navigates to the new project page when signed in" do
      user = create(:user)
      sign_in
      sleep(0.5)
      expect(page).to have_link 'Start a project'
      click_on "Start a project"
      expect(page).to have_content("Let's get started")
      expect(page).to have_content("Make a great first impression")
      expect(find_button("Create project").present?).to eq(true)
    end
  end

  context "guest user" do
    scenario "views home page links" do
      visit("/")
      expect(page).to have_link 'Explore'
      expect(page).to have_link 'Start a project'
      expect(page).to have_link 'Search'
      expect(page).to have_link 'Sign in'
      expect(find_link("Explore")['href']).to eq("http://localhost:3000/#/discover")
      expect(find_link("Start a project")['href']).to eq("http://localhost:3000/#/projects/new")
      expect(find_link("Search")['href']).to eq("http://localhost:3000/#/search")
      expect(find_link("Sign in")['href']).to eq("http://localhost:3000/#/signin")
    end

    scenario "user navigates to the discover page" do
      visit("/")
      click_on "Explore"
      expect(page).to have_content("Show me")
      expect(page).to have_content("projects sorted by")
    end

    scenario "user navigates to the new project page" do
      visit("/")
      click_on "Start a project"
      expect(page).to have_content("Sign in")
    end

    scenario "user navigates to the search page" do
      visit("/")
      click_on "Search"
      expect(find("#search-input").present?).to eq(true)
    end

    scenario "user navigates to the sign in page" do
      visit("/")
      click_on "Sign in"
      expect(page).to have_content("Sign in")
    end

    scenario "user navigates to the discover page" do
      visit("/")
      click_on "Explore"
      expect(page).to have_content("Show me")
      expect(page).to have_content("projects sorted by")

      visit("/")
      expect(page).to have_link 'Explore'
      expect(page).to have_link 'Start a project'
      expect(page).to have_link 'Search'
      expect(page).to have_link 'Sign in'

      click_on "DISCOVER MORE"
      expect(page).to have_content("Show me")
      expect(page).to have_content("projects sorted by")
    end

    scenario "user navigates to the featured project show page" do
      visit("/")
      within(".featured-content") do
        find('a', match: :first).click
      end

      expect(page).to have_content("funding goal")
      expect(page).to have_content("days to go")
    end

    scenario "user navigates to a non-featured project show page" do
      visit("/")
      within(".project-list") do
        within('li', match: :first) do
          find('a', match: :first).click
        end
      end

      expect(page).to have_content("funding goal")
      expect(page).to have_content("days to go")
    end
  end
end
