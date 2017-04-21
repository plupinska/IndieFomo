class AddAttachmentImageToCampaigns < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :campaigns, :image
  end
end
