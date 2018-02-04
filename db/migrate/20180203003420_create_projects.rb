class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :short_blurb, null: false
      t.text :description, null: false
      t.integer :funding_amount, null: false
      t.datetime :funding_end_date, null: false
      t.string :image_url
      t.integer :category_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :projects, :category_id
    add_index :projects, :user_id
  end
end
