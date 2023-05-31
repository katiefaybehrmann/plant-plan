class ClassificationsController < ApplicationController

    def index
        current_user = User.find(session[:user_id])
        classifications = current_user.classifications
        render json: classifications, status: :created
    end

    def show
        current_user = User.find(session[:user_id])
        classification = current_user.classifications.find_by(id: params[:id])
        if classification
            render json: classification, status: :created
        else
            render_not_found_response
        end
    end

    def create
        current_user = User.find(session[:user_id])
        classification = current_user.classifications.create(classification_params)
        if classification.valid?
            render json: classification, status: :created
        else
            render json: {errors: classification.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def render_not_found_response
        render json: { error: "Classification not found" }, status: :not_found
    end

    def classification_params
        params.permit(:description, :conditions )
    end
end
