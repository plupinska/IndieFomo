class AddColToContribution < ActiveRecord::Migration
  def change
      add_column :contributions, :campaign_id, :integer, null: false
  end
end
