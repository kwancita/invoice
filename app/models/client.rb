class Client < ApplicationRecord
    has_many :invoicers
    belongs_to :user

    validates :name, :address, presence: true
    validates :email, :phone_number, presence: true, uniqueness: true

end
