module Api
    class BlogsController < ApiController
        before_action :set_blog, only: [ :show, :update, :destroy ]
        skip_before_action :authenticate_user!, :only => [:index, :show]

        def index
            @blogs = params[:user_id] ? Blog.where(user_id: params[:user_id]) : Blog.all
            render json: BlogSerializer.new(@blogs)
        end

        def show
            render json: BlogSerializer.new(@blog)
        end

        def create
            @blog = Blog.new(blog_params)
            @blog.user_id = current_user.id

            if @blog.save
                render json: BlogSerializer.new(@blog), status: :created, location: @blog
            else
                render json: @blog.errors, status: :unprocessable_entity
            end
        end

        def update
            if @blog.update(blog_params)
                render json: @blog
            else
                render json: @blog.errors, status: :unprocessable_entity
            end
        end

        def destroy
            @blog.destroy
        end

        private
        def set_blog
            @blog = Blog.find(params[:id])
        end

        def blog_params
            params.require(:blog).permit(:title, :content, :user_id).tap do |blog_params|
                blog_params.require(:user_id)
            end
        end
    end
end
