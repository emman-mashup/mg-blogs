import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchCurrentUser } from "../../api/user";

import {
  Blog,
  BlogBody,
  BlogAPIResponse,
  BlogListAPIResponse,
} from "../types/blogTypes";

import { fetchAllBlogs as defaultFetchBlogs } from "../../api/blog";

export type BlogsDashboardProps = {
  fetchAllBlogs?: () => Promise<BlogListAPIResponse>;
};

const BlogsDashboard = ({
  fetchAllBlogs = defaultFetchBlogs,
}: BlogsDashboardProps) => {
  const [blogs, setBlogs] = useState([] as Blog[]);

  useEffect(() => {
    getBlogs();
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      return await fetchCurrentUser();
    } catch (error) {
      console.log("log error", error);
    }
  };

  const getBlogs = async () => {
    try {
      const response = await fetchAllBlogs();
      const responseBlogs = response.data.map((blog: BlogAPIResponse) => {
        return blog.attributes;
      });
      setBlogs(responseBlogs);
    } catch {
      console.error("failed to get blogs");
    }
  };

  return (
    <>
      <h1>BLOGS DASHBOARD2121</h1>
      {blogs.map((blog: Blog, index: number) => (
        <div className="blog-item" key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </>
  );
};

export default BlogsDashboard;
