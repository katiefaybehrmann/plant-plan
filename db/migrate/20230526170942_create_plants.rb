class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :img_url
      t.text :description
      t.date :seed_indoor
      t.date :seedling_transplant
      t.date :seed_outdoor
      t.integer :user_id
      t.integer :classification_id

      t.timestamps
    end
  end
end
