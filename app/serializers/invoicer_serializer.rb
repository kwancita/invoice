class InvoicerSerializer < ActiveModel::Serializer
  attributes :id, :due_date, :desc, :price, :tax, :status, :tax_total, :total, :created_at
  has_one :client
  has_one :user

  def tax_total
    (object.price * object.tax / 100).round(2)
    #8.875 format 2 decimal
  end

  def total
    self.tax_total + object.price
  end

end
