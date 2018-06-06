json.set! "reward" do
  json.extract! @reward,
    :id,
    :amount,
    :description,
    :title,
    :project_id
end
