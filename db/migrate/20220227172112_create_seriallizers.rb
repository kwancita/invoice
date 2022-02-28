class CreateSeriallizers < ActiveRecord::Migration[7.0]
  def change
    create_table :seriallizers do |t|
      t.string :client_invoices

      t.timestamps
    end
  end
end
