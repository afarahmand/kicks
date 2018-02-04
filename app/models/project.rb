class Project < ApplicationRecord
  validates :title, :short_blurb, :description, :funding_amount, presence: true
  validates :funding_end_date, :funding_amount, :category, :user_id, presence: true

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :category
  # has_many :backings
  # has_many :rewards
  # has_many :backers,
  #   through: :backings
end
