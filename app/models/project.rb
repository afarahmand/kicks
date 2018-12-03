class Project < ApplicationRecord
  validates :title, :short_blurb, :description, :funding_amount, presence: true
  validates :funding_end_date, :category, :user_id, presence: true

  validates :title, length: { minimum: 5, maximum: 60 }
  validates :short_blurb, length: { minimum: 20, maximum: 135 }
  validates :description, length: { minimum: 200 }

  validates :funding_amount, numericality: { only_integer: true, greater_than: 0 }
  validates :category, inclusion: { in: %w(Art Fashion Film Food Games Technology) }

  validates :funding_end_date, date: true
  validates :funding_end_date, date: { after: Proc.new { Time.now } }
  validates :funding_end_date, date: { before: Proc.new { Time.now + 12.month } }

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :rewards#, dependent: :destroy

  has_many :backings,
    through: :rewards

  has_many :backers,
    through: :backings,
    source: :backer

  def self.discovery_results(category, sort)
    currQuery = Project.all

    if category != "All"
      currQuery = currQuery.where(category: category)
    end

    if sort != "Random"
      case sort
      when "Funding Goal"
        currQuery = currQuery.order(:funding_amount)
      when "End Date"
        currQuery = currQuery.order(:funding_end_date)
      when "Newest"
        currQuery = currQuery.order(:created_at)
      when ""
      end
    end

    currQuery.limit(9)
  end

  def self.search_results(query)
    if query == ""
      currQuery = Project.all
    else
      param = '%' + query.downcase + '%'
      currQuery = Project.where('
        lower(title) LIKE ? or
        lower(short_blurb) LIKE ?
      ', param, param)
    end

    currQuery
  end

  def percentage_funded
    amount_funded = 0

    self.rewards.each do |reward|
      amount_funded+=Backing.where(reward_id: reward.id).count*reward.amount
    end

    (100*amount_funded.to_f/self.funding_amount.to_f).round
  end
end
