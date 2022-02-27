class InvoicersController < ApplicationController
    def index
        render json: current_user.invoicers.all
    end

    def show
        invoice = find_invoice
        render json: invoice
    end
    
    def create
        invoice = current_user.invoicers.create!(invoice_params)
        render json: invoice, status: :created
    end

    def update
        invoice = find_invoice
        invoice.update!(invoice_params)
        render json: invoice, status: :ok
    end

    def destroy
        invoice = find_invoice
        invoice.destroy
        head :no_content
    end

    private

    def find_invoice
        Invoicer.find(params[:id])
    end

    def invoice_params
        params.permit(:user_id, :client_id, :due_date, :desc, :price, :tax, :status)
    end
end
