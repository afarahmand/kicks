class ChangeColumnNameInRewards < ActiveRecord::Migration[5.1]
  def change
    rename_column :rewards, :reward, :title
  end
end
