import React, { useState, useEffect, ChangeEvent } from "react";

import {
  Blog,
  BlogBody,
  BlogAPIResponse,
  BlogListAPIResponse,
} from "../types/blogTypes";

import { fetchBlogs as defaultFetchBlogs } from "../../api/blog";

export type BlogsDashboardProps = {
  fetchBlogs?: () => Promise<BlogListAPIResponse>;
};

const BlogsDashboard = ({
  fetchBlogs = defaultFetchBlogs,
}: BlogsDashboardProps) => {
  const [blogs, setBlogs] = useState([] as Blog[]);
  console.log("blog dashboard");
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await fetchBlogs();
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
      <h1>BLOGS DASHBOARD</h1>
      {blogs.map((blog: Blog, index: number) => (
        <div className="blog-item">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </>
  );
};

export default BlogsDashboard;
