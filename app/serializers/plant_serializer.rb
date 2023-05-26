class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :description, :seed_indoor, :seedling_transplant, :seed_outdoor, :user_id, :classification_id
end
