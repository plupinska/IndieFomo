class AddDateToContribution < ActiveRecord::Migration
  def change
    add_column :contributions, :date, :date
  end
end
