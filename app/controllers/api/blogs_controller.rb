module Api
    class BlogsController < ApiController
        
        def index
            blogs = Blog.all
            render json: BlogSerializer.new(blogs)
        end

        def create
            blog = Blog.create(blog_params)

            render json: BlogSerializer.new(blog)
        end

        private
        def blog_params
            params.require(:blog).permit(:title, :content, :user_id)
        end
    end
end
