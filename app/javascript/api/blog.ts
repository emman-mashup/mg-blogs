import fetch from 'isomorphic-fetch';

import {
  BlogListAPIResponse,
  BlogAPIResponse,
  BlogBody,
} from '../react/types/blogTypes';
import { User } from '../react/types/userTypes';

export const fetchAllBlogs = async (): Promise<BlogListAPIResponse> => {
  const endpoint = '/api/blogs';
  const headers = {
    Accept: 'application/json',
  };

  const response = await fetch(endpoint, { headers, method: 'GET' });
  return response.json();
};

export const fetchUserBlogs = async (
  user_id: number
): Promise<BlogListAPIResponse> => {
  const endpoint = '/api/users/' + user_id + '/blogs';
  const headers = {
    Accept: 'application/json',
  };

  const response = await fetch(endpoint, { headers, method: 'GET' });
  return response.json();
};

export const fetchBlog = async (blog_id: number): Promise<BlogAPIResponse> => {
  const endpoint = '/api/blogs/' + blog_id;
  const headers = {
    Accept: 'application/json',
  };

  const response = await fetch(endpoint, { headers, method: 'GET' });
  return response.json();
};

export const createBlog = async (body: BlogBody): Promise<BlogAPIResponse> => {
  const endpoint = '/api/blogs';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  //user.attributes.id -> userAPIresponse
  // body.blog.userId = user.id;

  const serializedBody = JSON.stringify(body);
  const response = await fetch(endpoint, {
    headers,
    method: 'POST',
    body: serializedBody,
  });

  return response.json();
};
