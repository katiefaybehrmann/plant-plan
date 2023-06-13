class Plant < ApplicationRecord
    belongs_to :user
    belongs_to :classification
    validates_presence_of :name, :img_url
end
