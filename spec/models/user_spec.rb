require 'rails_helper'

RSpec.describe User do
  describe "Validations" do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:password_digest) }
    xit { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:image_url) }

    it "validates uniqueness of email" do
      user1 = User.create(
        name: "Elon Musk",
        email: "elon@spacex.com",
        password: "password",
        image_url: "https://i.imgur.com/xUF2EjU.png"
      )

      bad_user = User.new(
        name: "Elon Tusk",
        email: "elon@spacex.com",
        password: "password1",
        image_url: "https://i.imgur.com/xUF2EjU.png"
      )

      good_user = User.new(
        name: "Elon Musk",
        email: "elon2@spacex.com",
        password: "password",
        image_url: "https://i.imgur.com/xUF2EjU.png"
      )

      expect(bad_user.valid?).to eq(false)
      expect(good_user.valid?).to eq(true)
    end

    it { should validate_length_of(:password).is_at_least(4) }
    it { should allow_value(nil).for(:password) }

    xit { should before_validation(:ensure_session_token) }
  end

  describe "Associations" do
    it { should have_many(:backings) }
    it { should have_many(:projects).dependent(:destroy) }
    it { should have_many(:backed_projects) }
    it { should have_many(:rewards) }
  end

  describe "#password=" do
    it "sets the user's password" do
      user = create(:user)

      old_password = user.password
      user.password = "new_password"
      new_password = user.password

      expect(new_password).to_not eq(old_password)
    end
  end

  describe "#is_password?" do
    it "determines whether the password argument is equal to the user's password" do
      user = create(:user)
      user.password = "password"

      expect(user.is_password?("password")).to eq(true)
      expect(user.is_password?("wrong_password")).to eq(false)
    end
  end

  describe "#ensure_session_token" do
    it "assigns a session_token to the user if it doesn't already have one" do
      user = User.new(session_token: nil)
      old_session_token = user.session_token
      user.ensure_session_token

      expect(old_session_token).to eq(nil)
      expect(user.session_token).to_not eq(nil)
    end
  end

  describe "#reset_session_token!" do
    it "resets the user's session_token" do
      user = create(:user)
      old_session_token = user.session_token
      user.reset_session_token!

      expect(user.session_token).to_not eq(old_session_token)
    end
  end

  describe "self.find_by_credentials" do
    it "returns the user if the arguments match a user's email and password" do
      user = create(:user,
        email: "jdog",
        password_digest: BCrypt::Password.create("pword")
      )
      result = User.find_by_credentials("jdog", "pword")

      expect(result).to eq(user)
    end

    it "returns nil if the credentials do not match any stored user's credentials" do
      user = create(:user, email: "jdog")
      user.password=("pword")
      result = User.find_by_credentials("kdog", "bword")

      expect(result).to eq(nil)
    end
  end
end
