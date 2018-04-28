json.set! "reward" do
  json.extract! @reward,
    :id,
    :amount,
    :description,
    :reward,
    :project_id
end
