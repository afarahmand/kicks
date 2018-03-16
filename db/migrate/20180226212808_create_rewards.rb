class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.integer :amount, null: false
      t.string :description
      t.string :reward, null: false
      t.integer :project_id, null: false

      t.timestamps
    end

    add_index :rewards, :project_id
  end
end
