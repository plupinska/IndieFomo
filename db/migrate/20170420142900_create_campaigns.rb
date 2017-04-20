class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.integer :user_id, null: false
      t.string :title
      t.text :descriptions
      t.string :tagline
      t.integer :category_id
      t.string :image_url
      t.date :end_date
      t.float :target_amount
      
      t.timestamps null: false
    end
  end
end
