class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        render json: current_user, include: ['plants', 'plants.classification']
    end

    # def top_users
    #     users = User.top_users (params[:n])
    #     if users.length > 0
    #         render json: users, status: :created
    #     else
    #         render json: { errors: "No users with more than #{params[:n]} plants"}, status: :not_found
    #     end

    # end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
