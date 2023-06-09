class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :description, :seed_indoor, :seedling_transplant, :seed_outdoor, :classification_id
  belongs_to :user
  belongs_to :classification
end
