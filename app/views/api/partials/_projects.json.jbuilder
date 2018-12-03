projects.each do |project|
  json.set! project.id do
    json.extract! project,
      :id,
      :title,
      :short_blurb,
      :description,
      :funding_amount,
      :funding_end_date,
      :image_url,
      :category,
      :user_id
    json.percentage_funded project.percentage_funded
  end
end
