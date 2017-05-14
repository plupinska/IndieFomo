class Fixdate < ActiveRecord::Migration
  def change
    remove_column :contributions, :end_date
    add_column :contributions, :date, :string
  end
end
