json.partial! "api/users/user", user: @user

# json.extract! @user,
#   :id,
#   :email,
#   :name
#
# json.array! @projects do |project|
#   json.extract! project,
#     :id,
#     :title,
#     :short_blurb,
#     :description,
#     :funding_amount,
#     :funding_end_date,
#     :image_url,
#     :category,
#     :user_id
# end
