class User < ApplicationRecord
    has_secure_password
    has_many :plants
    has_many :classifications, through: :plants
    validates :username, presence: true, uniqueness: true

    def self.top_users n
        top_users_arr = self.select { |u| u.plants.length > n.to_i }
    end
end
