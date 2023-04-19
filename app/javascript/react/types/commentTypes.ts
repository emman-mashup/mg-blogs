export type CommentAPIResponse = {
  id: string;

  //TODO check this type usage
  type: string;
  attributes: Comment;
};

export type Comment = {
  id: number;
  content: string;
  formattedCreatedAt: string;
  upVotes: number;
  downVotes: number;

  //TODO check these
  userId: number;
  blogId: number;
  commentId: number;
};

export type CommentBody = {
  comment: {
    content: string;
  };
};
