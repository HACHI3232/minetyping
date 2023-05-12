Rails.application.routes.draw do
  root to: 'home#index'
  get 'abouts/index'
  get 'characters/index'
  
  resources :dictionaries do
    resources :words, only: :create
  end
  resources :typings
end
