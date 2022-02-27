class UsersController < ApplicationController

    skip_before_action :authenticate_user, only:[:create, :show]

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No one is logged in", status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    # def destroy
    #     user = find_user
    #     user.destroy
    #     head :no_content
    # end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :username, :email, :phone_number, :address, :logo, :password, :company)
    end

end
