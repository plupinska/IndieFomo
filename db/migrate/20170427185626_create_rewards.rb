class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :campaign_id
      t.string :title
      t.string :description
      t.integer :price
      t.attachment :image

      t.timestamps null: false
    end
  end
end
