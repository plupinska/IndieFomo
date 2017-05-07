class AddPhotoToCategories < ActiveRecord::Migration
  def change
    change_table :categories do |t|
      t.attachment :image
    end
  end
end
