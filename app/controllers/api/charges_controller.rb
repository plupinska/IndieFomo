class Api::ChargesController < ApplicationController

  def new
  end

  def create
    #  default for now. Stripe ammounts must be in cents
     
    @amount = params[:amount]

    customer = Stripe::Customer.create(
    :email => params[:stripeEmail],
    :source => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
    :customer => customer.id,
    :amount => @amount,
    :description => 'Rails Stripe customer',
    :currency => 'usd'
    )

  rescue = Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

end
