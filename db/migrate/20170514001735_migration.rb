class Migration < ActiveRecord::Migration
  def change
    remove_column :contributions, :date
    add_column :contributions, :end_date, :string
  end
end
