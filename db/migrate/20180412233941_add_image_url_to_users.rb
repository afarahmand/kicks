class AddImageUrlToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :image_url, :string, null: false, default: 'https://i.imgur.com/rfxjQeS.png'
  end
end
