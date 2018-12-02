class RemoveUniqueConstraintOnRewards < ActiveRecord::Migration[5.1]
  def change
    remove_index :rewards, [:project_id, :amount]
    add_index :rewards, :project_id
  end
end
