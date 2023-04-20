import React, { useState, useEffect, ChangeEvent } from 'react';

import {
  Blog,
  BlogBody,
  BlogAPIResponse,
  BlogListAPIResponse,
} from '../types/blogTypes';

import { fetchBlogs as defaultFetchBlogs } from '../../api/blog';

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

export type BlogsDashboardProps = {
  fetchBlogs?: () => Promise<BlogListAPIResponse>;
};

const BlogsDashboard = ({
  fetchBlogs = defaultFetchBlogs,
}: BlogsDashboardProps) => {
  const [blogs, setBlogs] = useState([] as Blog[]);
  console.log('blog dashboard');
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
      console.error('failed to get blogs');
    }
  };

  return (
    <>
      <div>
        {/* votes */}
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md">
          <ArrowUpIcon className="voteButtons" />
          <p>0</p>
          <ArrowDownIcon className="voteButtons" />
        </div>

        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default BlogsDashboard;

{
  /* {blogs.map((blog: Blog, index: number) => (
            <div className="blog-item" key={index}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          ))} */
}
