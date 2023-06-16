class ClassificationSerializer < ActiveModel::Serializer
    attributes :id, :description, :conditions, :unique_users
    has_many :plants
    # has_many :users

    def unique_users
      object.users.uniq
    end
  end