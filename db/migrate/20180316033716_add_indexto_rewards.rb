class AddIndextoRewards < ActiveRecord::Migration[5.1]
  def change
    add_index :rewards, [:project_id, :amount], unique: true
  end
end
