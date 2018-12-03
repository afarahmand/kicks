Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :projects, except: [:new, :edit] do
      resources :rewards, only: [:create, :update, :destroy] do
        resources :backings, only: [:create]
      end
    end

    resources :project_discovery, only: [:index]
    resources :project_searches, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
