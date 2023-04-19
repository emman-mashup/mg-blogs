import fetch from "isomorphic-fetch";

import {
  BlogListAPIResponse,
  BlogAPIResponse,
  BlogBody,
} from "../react/types/blogTypes";

export const fetchBlogs = async (): Promise<BlogListAPIResponse> => {
  const endpoint = "/api/blogs";
  const headers = {
    Accept: "application/json",
    // TODO token here
    // Authorization: 
  };

  const response = await fetch(endpoint, { headers, method: "GET" });
  return response.json();
};
