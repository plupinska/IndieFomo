class FixCategory < ActiveRecord::Migration
  def change
    remove_column :categories, :type
    add_column :categories, :cat, :string, null: false
  end
end
