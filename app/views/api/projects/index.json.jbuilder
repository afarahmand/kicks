json.set! "projects" do
  json.partial! "api/partials/projects", projects: @projects
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
