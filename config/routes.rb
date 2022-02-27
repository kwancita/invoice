Rails.application.routes.draw do
 
  resources :invoicers
  resources :users, only:[:update]
  resources :clients

  post '/signup', to: "users#create"
  get '/me', to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
