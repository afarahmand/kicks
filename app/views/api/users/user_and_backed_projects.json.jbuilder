percentage_funded = Project.percentage_funded

json.set! "user" do
  json.extract! @user,
    :id,
    :email,
    :name
end

json.set! "created_projects" do
  json.partial! "api/partials/projects", projects: @user.projects, percentage_funded: percentage_funded
end

json.set! "backed_projects" do
  json.partial! "api/partials/projects", projects: @user.backed_projects, percentage_funded: percentage_funded
end

json.set! "rewards" do
  @user.rewards.each do |reward|
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

json.set! "backings" do
  @user.backings.each do |backing|
    json.set! backing.id do
      json.extract! backing,
        :id,
        :user_id,
        :reward_id
    end
  end
end
