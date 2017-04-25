class EditTables < ActiveRecord::Migration
  def change
    drop_table :Contribution
    drop_table :Category

    create_table :contribution do |t|
      t.integer :user_id, null: false
      t.integer :reward_id
      t.float :amount, null: false
    end

    create_table  :category do |t|
      t.string :type, null: false
    end
  end
end
