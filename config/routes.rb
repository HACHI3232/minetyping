Rails.application.routes.draw do
  get 'home/index'
  resources :dictionaries
  get 'abouts/index'
  get 'dictionaries/index'
  get 'characters/index'
end
