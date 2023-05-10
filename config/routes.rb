Rails.application.routes.draw do
  root to: 'home#index'
  get 'abouts/index'
  get 'characters/index'
  resources :dictionaries
  resources :words
  resources :typings
end
