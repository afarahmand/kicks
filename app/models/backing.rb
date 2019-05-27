class Backing < ApplicationRecord
  validates :user_id, :reward_id, presence: true
  validate :backer_not_creator

  def backer_not_creator
    backer_id = user_id
    reward = Reward.find_by(id: reward_id)

    if reward.present?
      creator_id = reward.project.creator.id
      if user_id == creator_id
        errors.add(:user_id, "You can't back your own projects.")
      end
    end
  end

  belongs_to :backer,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :reward

  has_one :project,
    through: :reward,
    source: :project
end
