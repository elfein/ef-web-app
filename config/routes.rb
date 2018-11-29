Rails.application.routes.draw do

  namespace :api do
    resources :people, only: [:index]
  end

end
