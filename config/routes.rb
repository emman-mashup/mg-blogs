Rails.application.routes.draw do
  devise_for :users
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  #TODO set to user homepage/feed instead of users list
  root "blogs#index"

  resources :users, only: [:index, :new, :edit, :create, :update, :destroy, :show]

  devise_scope :user do
    get "/signout", to: "devise/sessions#destroy", as: :signout
  end

  resources :blogs, only: [:index, :new, :edit, :show]

  namespace :api do
    resources :blogs, only: [:index, :show, :new, :edit, :create, :update, :destroy] do
      resources :comments, only: [:index, :show, :destroy]
    end

    resources :comments, only: [:index, :show, :new, :edit, :create, :update, :destroy] do
      resources :comments, only: [:index, :show, :destroy]
    end

    resources :current_users, only: [:index]

    resources :users, only: [:index, :show], shallow: true do
      resources :blogs, only: [:index, :show, :destroy]
      resources :comments, only: [:index, :show, :destroy]
    end

  end

  # %i = non-interpolated array of symbols %i[method] == [:method]
end
