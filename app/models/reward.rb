class Reward < ApplicationRecord
  validates :amount, :description, :reward, :project_id, presence: true

  belongs_to :project
  has_many :backings
end
