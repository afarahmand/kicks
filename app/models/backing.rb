class Backing < ApplicationRecord
  validates :user_id, :reward_id, presence: true

  belongs_to :backer,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :reward

  has_one :project,
    through: :reward,
    source: :project
end
