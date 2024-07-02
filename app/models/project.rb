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

  has_many :rewards, dependent: :destroy

  has_many :backings,
    through: :rewards

  has_many :backers,
    through: :backings,
    source: :backer

  def percentage_funded
    project_amount_funded = ActiveRecord::Base.connection.execute("
      SELECT SUM(backings_per_reward) AS amount_funded
      FROM (
        SELECT project_id, COUNT(backings.id)*rewards.amount AS backings_per_reward
        FROM backings
        INNER JOIN rewards
        ON backings.reward_id=rewards.id
        INNER JOIN projects
        ON rewards.project_id=projects.id
        GROUP BY rewards.id
        HAVING project_id=#{self.id}
      ) AS derivedTable
    ");

    (100*project_amount_funded[0]["amount_funded"].to_f/self.funding_amount.to_f).round(2)
  end

  def self.percentage_funded
    projects_amount_funded = ActiveRecord::Base.connection.execute("
      SELECT SUM(backings_per_reward) AS amount_funded
      FROM (
        SELECT project_id, COUNT(backings.id)*rewards.amount AS backings_per_reward
        FROM backings
        INNER JOIN rewards
        ON backings.reward_id=rewards.id
        INNER JOIN projects
        ON rewards.project_id=projects.id
        GROUP BY rewards.id
      ) AS derivedTable
      GROUP BY project_id
      ORDER BY project_id
    ");

    result = {}
    Project.order("id ASC").pluck(:id, :funding_amount).each_with_index do |project, idx|
      result[project[0]] = (100*projects_amount_funded[idx]["amount_funded"].to_f/project[1]).round(2)
    end
    result
  end

  def self.discovery_results(category: "All", sort: "Random")
    currQuery = Project.all

    if category != "All"
      currQuery = currQuery.where(category: category)
    end

    case sort
    when "Random"
      currQuery = currQuery.order("random()")
    when "Funding Goal"
      currQuery = currQuery.order(:funding_amount)
    when "End Date"
      currQuery = currQuery.order(:funding_end_date)
    when "Newest"
      currQuery = currQuery.order(:created_at)
    # when "% Backed"
    #   currQuery = currQuery.order(&:percentage_funded)
    #
    #   Amount funded
    #
    #   query = ActiveRecord::Base.connection.execute("
    #     SELECT SUM(backings_per_reward) AS amount_funded
    #     FROM (
    #       SELECT COUNT(backings.id)*rewards.amount AS backings_per_reward
    #       FROM backings
    #       INNER JOIN rewards
    #       ON backings.reward_id=rewards.id
    #       INNER JOIN projects
    #       ON rewards.project_id=projects.id
    #       GROUP BY rewards.id
    #       HAVING project_id=1
    #     ) AS derivedTable
    #   ");
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
end
