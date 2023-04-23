export type CommentAPIResponse = {
  id: string;

  type: string;
  attributes: Comment;
};

export type CommentListAPIResponse = {
  data: CommentAPIResponse[];
};

export type Comment = {
  id: number;
  content: string;
  formattedCreatedAt: string;
  upVotes: number;
  downVotes: number;

  userId: number;
  blogId: number;
  commentId: number;
};

export type CommentBody = {
  comment: {
    content: string;
    userId: number;
    blogId: number;
    commentId: number;
  };
};
