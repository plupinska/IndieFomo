class Fix < ActiveRecord::Migration
  def change
    #NOT NEEDED 
    # drop_table :category
    # drop_table :contribution

    create_table :categories do |t|
      t.string :type

      t.timestamps null: false
    end

    create_table :contributions do |t|
      t.integer :user_id
      t.integer :reward_id
      t.integer :amount
    end
  end
end
