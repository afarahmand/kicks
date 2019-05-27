require 'rails_helper'

RSpec.describe Reward do
  describe "Validations" do
    it { should validate_presence_of(:amount) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:project_id) }
  end

  describe "Associations" do
    it { should belong_to(:project) }
    it { should have_many(:backings) }
  end
end
