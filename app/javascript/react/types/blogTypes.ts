export type BlogAPIResponse = {
  id: string;

  //TODO check this type usage
  type: string;
  attributes: Blog;
};

export type BlogListAPIResponse = {
  data: BlogAPIResponse[];
};

export type Blog = {
  id: number;
  title: string;
  content: string;
  formattedCreatedAt: string;
  upVotes: number;
  downVotes: number;

  //TODO check this
  userId: number;
};

export type BlogBody = {
  blog: {
    title: string;
    content: string;
    userId: number;
  };
};
