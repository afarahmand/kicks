require 'rails_helper'

RSpec.describe Project do
  describe "Validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:short_blurb) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:funding_amount) }
    it { should validate_presence_of(:funding_end_date) }
    it { should validate_presence_of(:category) }
    it { should validate_presence_of(:user_id) }

    it { should validate_length_of(:title).is_at_least(5) }
    it { should validate_length_of(:title).is_at_most(60) }
    it { should validate_length_of(:short_blurb).is_at_least(20) }
    it { should validate_length_of(:short_blurb).is_at_most(135) }
    it { should validate_length_of(:description).is_at_least(200) }

    it { should validate_numericality_of(:funding_amount).only_integer }
    it { should validate_numericality_of(:funding_amount).is_greater_than(0) }
    it { should validate_inclusion_of(:category).in_array(%w(Art Fashion Film Food Games Technology)) }

    context "funding_end_date" do
      it "validates that it is after Time.current" do
        user = create(:user)
        project = Project.new(title: "Let's Go To Mars",
          short_blurb: "I'm eh putting together some funds for eh bad weather...",
          description: "During the winter, the weather can get very bad.
          We need to put together some funds to allow us to prevent the
          weather from negatively affecting \npeople's livelihoods and
          commutes.  The more money we raise, the better and more secure
          our constituents will be.",
          funding_amount: 10000,
          image_url: "https://i.imgur.com/c1VXFGK.jpg",
          category: "Technology",
          user_id: user.id,
          funding_end_date: Time.current + 1.day
        );

        expect(project.valid?).to eq(true)
      end

      it "invalidates it if it is before Time.current" do
        user = create(:user)
        project = Project.new(title: "Let's Go To Mars",
          short_blurb: "I'm eh putting together some funds for eh bad weather...",
          description: "During the winter, the weather can get very bad.
          We need to put together some funds to allow us to prevent the
          weather from negatively affecting \npeople's livelihoods and
          commutes.  The more money we raise, the better and more secure
          our constituents will be.",
          funding_amount: 10000,
          image_url: "https://i.imgur.com/c1VXFGK.jpg",
          category: "Technology",
          user_id: user.id,
          funding_end_date: Time.current - 1.day
        );

        expect(project.valid?).to eq(false)
      end

      it "invalidates it if it is more than a year from now" do
        user = create(:user)
        project = Project.new(title: "Let's Go To Mars",
          short_blurb: "I'm eh putting together some funds for eh bad weather...",
          description: "During the winter, the weather can get very bad.
          We need to put together some funds to allow us to prevent the
          weather from negatively affecting \npeople's livelihoods and
          commutes.  The more money we raise, the better and more secure
          our constituents will be.",
          funding_amount: 10000,
          image_url: "https://i.imgur.com/c1VXFGK.jpg",
          category: "Technology",
          user_id: user.id,
          funding_end_date: Time.current + 1.day + 1.year
        );

        expect(project.valid?).to eq(false)
      end
    end
  end

  describe "Associations" do
    it { should belong_to(:creator) }
    it { should have_many(:rewards) }
    it { should have_many(:backings) }
    it { should have_many(:backers) }
  end

  describe "#percentage_funded" do
    it "returns the % of the funding_amount that has been backed via rewards" do
      n = 20
      creator = create(:user)
      backers = create_list(:user, n)
      backer_ids = User.pluck(:id) - [creator.id]

      project = create(:project, user_id: creator.id)
      reward = create(:reward, project_id: project.id)

      (n*rand).ceil.times do |backing|
        backer_id = backer_ids.sample
        create(:backing, user_id: backer_id, reward_id: reward.id)
        backer_ids-=[backer_id]
      end

      total_amount_raised = Backing.count * reward.amount
      result = 100*total_amount_raised/project.funding_amount

      expect(project.percentage_funded).to eq(result)
    end
  end

  describe "self.percentage_funded" do
    it "returns the % of the funding_amount that has been backed via rewards for all projects" do
      n = 30
      creator = create(:user)
      backers = create_list(:user, n)
      backer_ids = User.pluck(:id) - [creator.id]

      project1 = create(:project, user_id: creator.id, funding_amount: 10)
      project2 = create(:project, user_id: creator.id, funding_amount: 100)
      project3 = create(:project, user_id: creator.id, funding_amount: 1000)

      project1_reward1 = create(:reward, project_id: project1.id, amount: 1)
      project1_reward2 = create(:reward, project_id: project1.id, amount: 10)
      project2_reward1 = create(:reward, project_id: project2.id, amount: 1)
      project2_reward2 = create(:reward, project_id: project2.id, amount: 10)
      project3_reward1 = create(:reward, project_id: project3.id, amount: 1)
      project3_reward2 = create(:reward, project_id: project3.id, amount: 10)

      (n*rand).ceil.times do |backing|
        backer_id = backer_ids.sample

        create(:backing,
          user_id: backer_id,
          reward_id: [project1_reward1.id, project1_reward2.id].sample
        )
        create(:backing,
          user_id: backer_id,
          reward_id: [project2_reward1.id, project2_reward2.id].sample
        )
        create(:backing,
          user_id: backer_id,
          reward_id: [project3_reward1.id, project3_reward2.id].sample
        )

        backer_ids-=[backer_id]
      end

      total_amount_raised = {
        project1.id => (
          (Backing.where(reward_id: project1_reward1.id).count * project1_reward1.amount) +
          (Backing.where(reward_id: project1_reward2.id).count * project1_reward2.amount)
        ),
        project2.id => (
          (Backing.where(reward_id: project2_reward1.id).count * project2_reward1.amount) +
          (Backing.where(reward_id: project2_reward2.id).count * project2_reward2.amount)
        ),
        project3.id => (
          (Backing.where(reward_id: project3_reward1.id).count * project3_reward1.amount) +
          (Backing.where(reward_id: project3_reward2.id).count * project3_reward2.amount)
        )
      }

      expected = {
        project1.id => (100*total_amount_raised[project1.id].to_f/project1.funding_amount).round(2),
        project2.id => (100*total_amount_raised[project2.id].to_f/project2.funding_amount).round(2),
        project3.id => (100*total_amount_raised[project3.id].to_f/project3.funding_amount).round(2)
      }

      expect(Project.percentage_funded[project1.id]).to eq(expected[project1.id])
      expect(Project.percentage_funded[project2.id]).to eq(expected[project2.id])
      expect(Project.percentage_funded[project3.id]).to eq(expected[project3.id])
    end
  end

  describe "self.discovery_results" do
    it "returns a maximum of 9 projects" do
      user = create(:user)
      create_list(:project, 20, user_id: user.id)

      expect(Project::discovery_results.count).to eq(9)
    end

    it "only returns projects that are in the selected category" do
      user = create(:user)
      project1 = create(:project, category: "Art", user_id: user.id)
      project2 = create(:project, category: "Food", user_id: user.id)
      project3 = create(:project, category: "Food", user_id: user.id)

      expect(Project::discovery_results(category: "Art").count).to eq(1)
      expect(Project::discovery_results(category: "Food").count).to eq(2)
    end

    context "returns projects in the selected sort order" do
      it "random" do
        n = 10
        user = create(:user)
        discovered_first_project_ids = []

        (0...n).each{ |i| create(:project, user_id: user.id) }
        (0...n).each{ |i| discovered_first_project_ids << Project::discovery_results(sort: "Random").map(&:id).first }

        expect(discovered_first_project_ids.uniq.length).to be > 1
      end

      it "funding goal (amount)" do
        n = 10
        user = create(:user)

        (0...n).each do |i|
          create(:project, user_id: user.id, funding_amount: (100000*rand).ceil)
        end

        sorted_results = Project::discovery_results(sort: "Funding Goal").map(&:funding_amount)

        sorted_results[0..-2].each_index do |idx|
          expect(sorted_results[idx]).to be <= sorted_results[idx + 1]
        end
      end

      it "end_date" do
        n = 10
        user = create(:user)

        (0...n).each do |i|
          rand_day = (rand*28).ceil
          rand_month = (rand*12).ceil
          rand_year = Time.current.year

          rand_time = Time.zone.parse("#{rand_year}-#{rand_month}-#{rand_day}")
          rand_time += 1.year if rand_time < Time.current
          create(:project, user_id: user.id, funding_end_date: rand_time)
        end

        sorted_results = Project::discovery_results(sort: "End Date").map(&:funding_end_date)

        sorted_results[0..-2].each_index do |idx|
          expect(sorted_results[idx]).to be <= sorted_results[idx + 1]
        end
      end

      it "newest" do
        n = 10
        user = create(:user)

        (0...n).each do |i|
          create(:project, user_id: user.id)
        end

        sorted_results = Project::discovery_results(sort: "Newest").map(&:created_at)

        sorted_results[0..-2].each_index do |idx|
          expect(sorted_results[idx]).to be <= sorted_results[idx + 1]
        end
      end

      xit "% Backed" do
        # n = 10
        #
        # n.times do |i|
        #   user = create(:user)
        #   project = create(:project, user_id: user.id, funding_amount: 10000)
        #   create(:reward, project: project, amount: 1000)
        # end
        #
        # reward_indices = Reward.pluck(:id)
        #
        # reward_indices.each do |reward_idx|
        #   user_ids = User.pluck(:id)
        #   (n*rand).floor.times do |backing_idx|
        #     user_id = user_ids.sample
        #     create(:backing, reward_id: reward_idx, user_id: user_id)
        #     user_ids-=[user_id]
        #   end
        # end
        #
        # sorted_results = Project::discovery_results(sort: "% Backed").map(&:id)
        # expected = Project::discovery_results(sort: "Random").sort{ |x,y| x.percentage_funded <=> y.percentage_funded }.map(&:id)
        #
        # p sorted_results
        # p expected
        #
        # expect(sorted_results).to eq(expected)
      end
    end
  end

  describe "self.search_results" do
    it "returns all projects if empty query string passed" do
      user = create(:user)
      project1 = create(:project, user_id: user.id, title: "Big Bertha", short_blurb: "Is this blurb short enough?")
      project2 = create(:project, user_id: user.id, title: "Little Willy", short_blurb: "I mean how short does a blurb have to be?")
      project3 = create(:project, user_id: user.id, title: "Tall Tex", short_blurb: "I'll trade you a magic trick for a vase.")

      results = Project::search_results("")

      expect(results.count).to eq(3)
    end

    it "is NOT case-sensitive" do
      user = create(:user)
      project1 = create(:project, user_id: user.id, title: "Big Bertha", short_blurb: "Is this blurb short enough?")
      project2 = create(:project, user_id: user.id, title: "Little Willy", short_blurb: "I mean how short does a blurb have to be?")
      project3 = create(:project, user_id: user.id, title: "Tall Tex", short_blurb: "I'll trade you a magic trick for a vase.")

      results1 = Project::search_results("Big")
      results2 = Project::search_results("big")

      expect(results1).to eq(results2)
    end

    it "returns all projects whose title or short blurb contains the query string" do
      user = create(:user)
      project1 = create(:project, user_id: user.id, title: "Big Bertha", short_blurb: "Is this blurb short enough?")
      project2 = create(:project, user_id: user.id, title: "Little Willy", short_blurb: "I mean how short does a blurb have to be?")
      project3 = create(:project, user_id: user.id, title: "Tall Tex", short_blurb: "I'll trade you a magic trick for a vase.")

      results = Project::search_results("blurb").pluck(:id)

      expect(results.sort).to eq([project1.id, project2.id].sort)
    end

    it "returns an empty array when no project's title or short blurb contains the query string" do
      user = create(:user)
      project1 = create(:project, user_id: user.id, title: "Big Bertha", short_blurb: "Is this blurb short enough?")
      project2 = create(:project, user_id: user.id, title: "Little Willy", short_blurb: "I mean how short does a blurb have to be?")
      project3 = create(:project, user_id: user.id, title: "Tall Tex", short_blurb: "I'll trade you a magic trick for a vase.")

      results = Project::search_results("z")

      expect(results.count).to eq(0)
    end
  end
end
