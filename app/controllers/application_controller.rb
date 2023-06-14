class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized

  def authorized
    render json: {errors: ["Not Authorized"]}, status: :unauthorized unless session.include? :user_id
  end

#   def current_user
#     current_user = User.find(session[:user_id])
# end

end
