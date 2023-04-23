module Api 
    class CurrentUsersController < ApiController
        skip_before_action :authenticate_user!, :only => [:index]
        
        def index
            if user_signed_in?
                render json: current_user
            else
                render status: :unauthorized, json: { error: "There is no signed in user"}
            end
        end
    end
end