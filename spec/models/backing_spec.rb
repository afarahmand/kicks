require 'rails_helper'

RSpec.describe Backing do
  describe "Validations" do
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:reward_id) }

    it "validates that the backer is NOT the same as the project creator" do
      backer = create(:user)
      creator = create(:user)
      project = create(:project, user_id: creator.id)
      reward = create(:reward, project_id: project.id)

      bad_backing = Backing.new(user_id: creator.id, reward_id: reward.id)
      good_backing = Backing.new(user_id: backer.id, reward_id: reward.id)

      expect(bad_backing.valid?).to eq(false)
      expect(good_backing.valid?).to eq(true)
    end
  end

  describe "Associations" do
    it { should belong_to(:backer) }
    it { should belong_to(:reward) }
    it { should have_one(:project) }
  end
end
