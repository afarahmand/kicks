json.set! "projects" do
  json.partial! "api/partials/projects", projects: @projects, percentage_funded: Project.percentage_funded
end

json.set! "users" do
  @users.each do |user|
    json.set! user.id do
      json.extract! user,
        :id,
        :name
    end
  end
end
