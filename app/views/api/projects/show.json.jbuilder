json.set! "project" do
  json.extract! @project,
    :id,
    :title,
    :short_blurb,
    :description,
    :funding_amount,
    :funding_end_date,
    :image_url,
    :category,
    :user_id
end

json.set! "rewards" do
  @project.rewards.each do |reward|
    json.set! reward.id do
      json.extract! reward,
        :id,
        :amount,
        :description,
        :title,
        :project_id
    end
  end
end

json.set! "user" do
  json.extract! @project.creator,
    :id,
    :name,
    :image_url
end
