require "rails_helper"
# include ApplicationHelper

RSpec.feature "project creation", js: true do
  scenario "user creates a new project" do
    user = create(:user)

    visit("/")

    expect(page).to have_content("Explore")
  end
end
