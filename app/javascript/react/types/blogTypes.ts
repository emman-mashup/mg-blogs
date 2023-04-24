import { User } from './userTypes';

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
  createdAt: string;
  upVotes: number;
  downVotes: number;

  //TODO check this
  user: User;
};

export type BlogBody = {
  blog: {
    title: string;
    content: string;
  };
};
