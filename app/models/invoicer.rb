class Invoicer < ApplicationRecord
  belongs_to :client
  belongs_to :user

  validates :due_date, :price, presence: true;
  validates :desc, length: {minimum:10}



end
