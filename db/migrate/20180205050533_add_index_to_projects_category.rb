class AddIndexToProjectsCategory < ActiveRecord::Migration[5.1]
  def change
    add_index :projects, :category
  end
end
