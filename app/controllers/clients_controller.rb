class ClientsController < ApplicationController
    def index
        render json: current_user.clients.all
    end

    def show
        client = find_client
        render json: client
    end
    
    def create
        client = current_user.clients.create!(client_params)
        render json: client, status: :created
    end

    def update
        client = find_client
        client.update!(client_params)
        render json: client, status: :ok
    end

    def destroy
        client = find_client
        client.destroy
        head :no_content
    end

    private

    def find_client
        Client.find(params[:id])
    end

    def client_params
        params.permit(:name, :email, :phone_number, :address)
    end
end
