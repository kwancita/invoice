class User < ApplicationRecord
    has_secure_password
    has_many :invoicers
    has_many :clients

    validates :name, :company, :logo, :address, presence: true
    validates :username, :email, :phone_number, presence: true, uniqueness: true

end
