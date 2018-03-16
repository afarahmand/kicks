class CreateBackings < ActiveRecord::Migration[5.1]
  def change
    create_table :backings do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false

      t.timestamps
    end

    add_index :backings, [:user_id, :reward_id], unique: true
  end
end
