json.set! "backing" do
  json.extract! @backing,
    :id,
    :user_id,
    :reward_id
end
