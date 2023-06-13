class UserSerializer < ActiveModel::Serializer
    attributes :username
    has_many :plants
    has_many :classifications
  end

