class AddIndicesToProjects < ActiveRecord::Migration[5.1]
  def up
    add_index :projects, :funding_amount
    add_index :projects, :funding_end_date
  end

  def down
    remove_index :projects, :funding_amount
    remove_index :projects, :funding_end_date
  end
end
