class ClassificationSerializer < ActiveModel::Serializer
    attributes :id, :description, :conditions
    has_many :users
    has_many :plants
  end