Rails.application.routes.draw do
  resources :blogs
  devise_for :users
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  #TODO set to user homepage/feed instead of users list
  root "blogs#index"

  resources :users, only: [:index, :new, :edit, :create, :update, :destroy]

  devise_scope :user do
    get "/signout", to: "devise/sessions#destroy", as: :signout
  end
end
