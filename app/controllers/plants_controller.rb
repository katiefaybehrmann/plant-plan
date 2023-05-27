class PlantsController < ApplicationController
    def index
        current_user = User.find(session[:user_id])
        plants = current_user.plants
        render json: plants, status: :created
    end

    def show
        current_user = User.find(session[:user_id])
        plant = current_user.plants.find_by(id: params[:id])
        if plant
            render json: plant, status: :created
        else
            render_not_found_response
        end
    end

    def create
        current_user = User.find(session[:user_id])
        plant = current_user.plants.create(plant_params)
        if plant.valid?
            render json: plant, status: :created
        else
            render json: {errors: plant.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        current_user = User.find(session[:user_id])
        plant = current_user.plants.find_by(id: params[:id])
        if plant
            plant.update(plant_params)
            if plant.valid?
                render json: plant, status: :created
            else
                render json: {errors: plant.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render_not_found_response
        end
    end

    def destroy
        current_user = User.find(session[:user_id])
        plant = current_user.plants.find_by(id: params[:id])
        if plant
            plant.destroy
            head :no_content
        else
            render_not_found_response
        end
    end

    private
    def render_not_found_response
        render json: { error: "Plant not found" }, status: :not_found
    end

    def plant_params
        params.permit(:name, :img_url, :description, :seed_indoor, :seedling_transplant, :seed_outdoor, :user_id, :classification_id)
    end

end