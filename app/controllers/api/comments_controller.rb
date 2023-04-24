module Api
    class CommentsController < ApiController
        before_action :set_comment, only: [ :show, :update, :destroy ]
        skip_before_action :authenticate_user!, :only => [:index, :show]

        def index
            # @comments = Comment.where(blog_id: @comment.blog_id)
            @comments = Comment.all
            render json: CommentSerializer.new(@comments)
        end

        def show
            render json: CommentSerializer.new(@comment)
        end

        def create
            @comment = Comment.new(comment_params)
            @comment.user_id = current_user.id

            if @comment.save
                render json: CommentSerializer.new(@comment), status: :created, location: @comment
            else
                render json: @comment.errors, status: :unprocessable_entity
            end
        end

        def update
            if @comment.update(comment_params)
                render json: @comment
            else
                render json: @comment.errors, status: :unprocessable_entity
            end
        end

        def destroy
            @comment.destroy
        end

        private
        def set_comment
            @comment = Comment.find(params[:id])
        end

        def comment_params
            params.require(:comment).permit(:content, :user_id, :blog_id, :comment_id).tap do |comment_params|
                comment_params.require(:blog_id)
            end
        end
    end
end
