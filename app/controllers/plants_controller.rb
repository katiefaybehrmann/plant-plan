class PlantsController < ApplicationController
    # skip_before_action :authorized, only: [:search]

    def index
        plants = current_user.plants 
        render json: plants, status: :created
    end

    def show
        plant = current_user.plants.find_by(id: params[:id])
        if plant
            render json: plant, status: :created
        else
            render_not_found_response
        end
    end

    def create
        plant = current_user.plants.create(plant_params)
        if plant.valid?
            render json: plant, status: :created
        else
            render json: {errors: plant.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        plant = current_user.plants.find_by(id: params[:id])
        if plant
            plant.update(img_url: params[:img_url])
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
        plant = current_user.plants.find_by(id: params[:id])
        if plant
            plant.destroy
            head :no_content
        else
            render_not_found_response
        end
    end

    # def search
    #     plants = Plant.all
    #     classifications = []
    #     plants.each do |p|
    #         if p.description.include?("tender")
    #             classifications.push(p.classification)
    #         end
    #     end
    #     if classifications.length > 0
    #         render json: classifications, status: :created
    #     else
    #         render json: { error: "No search matched" }, status: :not_found
    #     end
    # end

    private
    def render_not_found_response
        render json: { error: "Plant not found" }, status: :not_found
    end

    def plant_params
        params.permit(:name, :img_url, :description, :seed_indoor, :seedling_transplant, :seed_outdoor, :classification_id)
    end

    def current_user
        current_user = User.find(session[:user_id])
    end

end
