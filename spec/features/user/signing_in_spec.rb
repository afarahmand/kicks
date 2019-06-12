require "rails_helper"
include ApplicationHelper

RSpec.feature "Signing in", js: true do
  scenario "Sign in as demo user" do
    visit("/")
    click_on "Sign in"
    click_on "Sign In as Demo User"

    expect(current_path).to eq("/")
    expect(page).to have_button("Sign out")
  end

  # scenario "Sign in as as regular user" do
  #   user = create(:user)
  #   visit("/")
  #   click_on "Sign in"
  #   fill_in "Email", with: user.email
  #   fill_in "Password", with: user.password
  #   click_on "Log me in!"
  #
  #   expect(current_path).to eq("/")
  #   within(".right-nav") do
  #     expect(page).to have_button("Sign out")
  #   end
  # end

  scenario "Sign out" do
    visit("/")
    click_on "Sign in"
    click_on "Sign In as Demo User"

    expect(current_path).to eq("/")
    expect(page).to have_button("Sign out")

    click_on "Sign out"
    expect(page).to have_link("Sign in")
  end
end
