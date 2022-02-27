class CreateInvoicers < ActiveRecord::Migration[7.0]
  def change
    create_table :invoicers do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.date :due_date
      t.string :desc
      t.float :price
      t.float :tax, default:8.875
      t.boolean :status, default:false

      t.timestamps
    end
  end
end
