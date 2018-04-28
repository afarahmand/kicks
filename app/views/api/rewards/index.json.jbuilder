json.set! "rewards" do
  json.array! @rewards do |reward|
    json.extract! reward,
      :id,
      :title,
      :description,
      :amount
  end
end
