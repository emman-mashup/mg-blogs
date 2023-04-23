module Api 
    class UsersController < ApiController
        skip_before_action :authenticate_user!, :only => [:show]
        before_action :set_user

          # GET /users/1 or /users/1.json
        def show
            render json: UserSerializer.new(@user)
        end

        private
        # Use callbacks to share common setup or constraints between actions.
        def set_user
          @user = User.find(params[:id])
        end
    end
end