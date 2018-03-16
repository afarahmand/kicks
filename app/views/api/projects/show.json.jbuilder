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
  json.array! @rewards do |reward|
    json.extract! reward,
      :id,
      :amount,
      :description,
      :reward,
      :project_id
  end
end

json.set! "user" do
  json.extract! @user,
  :id,
  :name
end
