class CreateContributionsAndCategories < ActiveRecord::Migration
  def change
    create_table :Contribution do |t|
      t.integer :user_id, null: false
      t.integer :reward_id
      t.float :amount, null: false
    end

    create_table  :Category do |t|
      t.string :type, null: false
    end

  end
end
