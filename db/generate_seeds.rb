template = []
# 30 projects
# one
template << {
  line1: "Reward.create!(",
  line2: "  title: ",
  line3: "  amount: ",
  line4: "  description: ",
  line5: "  project_id: ",
  line6: ");",
  title: "A Pittance",
  amount: 1,
  description: "You will a token thank you email to express appreciation for your token support."
}
# two
template << {
  line1: "Reward.create!(",
  line2: "  title: ",
  line3: "  amount: ",
  line4: "  description: ",
  line5: "  project_id: ",
  line6: ");",
  title: "A Thank You Card",
  amount: 10,
  description: "You will receive a thank you card signed by the creator of this project expressing their sincere appreciation for your support."
}
# three
template << {
  line1: "Reward.create!(",
  line2: "  title: ",
  line3: "  amount: ",
  line4: "  description: ",
  line5: "  project_id: ",
  line6: ");",
  title: "Insider Tracking",
  amount: 100,
  description: "You will receive personalized updates about our progress as well as an inside view of our initiatives before public release."
}
# four
template << {
  line1: "Reward.create!(",
  line2: "  title: ",
  line3: "  amount: ",
  line4: "  description: ",
  line5: "  project_id: ",
  line6: ");",
  title: "Early Access",
  amount: 1000,
  description: "You will earn priority access upon completion.  We want you to be able to appreciate the results of our work before we share it with the public because of your generous support."
}

file = File.new("new_rewards.txt", "w")
(1..30).to_a.each do |project_id|
  [1, 10, 100, 1000].each_with_index do |amount, idx|
    file.puts(template[idx][:line1])

    file.write(template[idx][:line2])
    file.write('"')
    file.write(template[idx][:title])
    file.write('"')
    file.puts(",")

    file.write(template[idx][:line3])
    # file.write(template[idx][:amount])
    file.write(amount)
    file.puts(",")

    file.write(template[idx][:line4])
    file.write('"')
    file.write(template[idx][:description])
    file.write('"')
    file.puts(",")

    file.write(template[idx][:line5])
    file.puts(project_id)

    file.puts(template[idx][:line6])
  end
end

file.close
