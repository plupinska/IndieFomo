class Contribution < ActiveRecord::Base
   validates_numericality_of :amount, {greater_than_or_equal_to: 1, allow_nil: false, message: "Please enter an amount greater than zero!"}

  belongs_to :user
  belongs_to :campaign
  belongs_to :reward
end
