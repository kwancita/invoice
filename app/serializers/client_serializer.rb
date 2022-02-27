class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :address
  
  has_many :invoicers
end
