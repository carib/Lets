Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show] do
      resources :bookings, only: [:index]
    end

    resources :spots, only: [:index, :create, :update, :destroy, :show] do
      resources :bookings, only: [:index, :create]
    end

    resources :bookings, only: [:update, :destroy]

    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
