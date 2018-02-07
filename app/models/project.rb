class Project < ApplicationRecord
  validates :title, :short_blurb, :description, :funding_amount, presence: true
  validates :funding_end_date, :category, :user_id, presence: true

  validates :title, length: { maximum: 60 }
  validates :short_blurb, length: { maximum: 135 }

  validates :funding_amount, numericality: { only_integer: true, greater_than: 0 }
  validates :category, inclusion: { in: %w(Art Fashion Film Food Games Technology) }

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  # has_many :backings
  # has_many :rewards
  # has_many :backers,
  #   through: :backings

  def self.search_results(query)
    param = '%' + query.downcase + '%'
    #Project.where('lower(title) LIKE ? or lower(description) LIKE ?', param, param).limit(5)
    Project.where('
      lower(title) LIKE ? or
      lower(short_blurb) LIKE ?
    ', param, param)
  end
end
