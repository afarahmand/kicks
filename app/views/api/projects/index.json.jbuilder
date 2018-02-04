json.array! @projects do |project|
  json.extract! project,
    :id,
    :title,
    :short_blurb,
    :description,
    :funding_amount,
    :funding_end_date,
    :image_url,
    :category_id,
    :user_id
end
