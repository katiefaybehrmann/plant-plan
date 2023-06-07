class ClassificationSerializer < ActiveModel::Serializer
    attributes :description, :conditions
    has_many :users
    has_many :plants
  end