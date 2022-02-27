class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :address, :company, :logo, :username
  has_many :clients
  has_many :invoicers

  
end
