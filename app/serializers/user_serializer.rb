class UserSerializer < ActiveModel::Serializer
    attributes :id, :username
    has_many :plants
    has_many :classifications
  end