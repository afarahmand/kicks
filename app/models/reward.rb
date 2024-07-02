class Reward < ApplicationRecord
  validates :amount, :description, :title, :project_id, presence: true

  belongs_to :project
  has_many :backings, dependent: :destroy
end
