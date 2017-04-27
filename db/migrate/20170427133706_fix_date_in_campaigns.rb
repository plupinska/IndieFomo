class FixDateInCampaigns < ActiveRecord::Migration
  def change
    remove_column :campaigns, :end_date
    add_column :campaigns, :end_date, :datetime
  end
end
