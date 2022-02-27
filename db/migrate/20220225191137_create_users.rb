class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.string :address
      t.string :company
      t.string :logo
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
