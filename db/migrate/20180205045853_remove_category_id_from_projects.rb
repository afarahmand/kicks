class RemoveCategoryIdFromProjects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :category_id, :integer
  end
end
