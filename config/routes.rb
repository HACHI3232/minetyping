Rails.application.routes.draw do
  root to: 'home#index'
  get 'abouts/index'
  get 'dictionaries/index'
  get 'characters/index'
  
  resources :dictionaries
  resources :words
end
