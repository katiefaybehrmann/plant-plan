class Classification < ApplicationRecord
    has_many :plants
    has_many :users, through: :plants
    validates :description, :conditions, presence: true, uniqueness: true
end
