Rails.application.routes.draw do
  root to: 'recipes#index'
  get '/:id-(:slug)', to: 'recipes#show', id: /[a-zA-Z0-9]*/
end
