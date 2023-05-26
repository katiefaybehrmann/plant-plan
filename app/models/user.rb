class User < ApplicationRecord
    has_secure_password
    has_many :plants
    has_many :classifications, through: :plants
    validates :username, presence: true, uniqueness: true
end
