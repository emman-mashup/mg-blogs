import React, { useState, useEffect, ChangeEvent } from "react";
import Avatar from "boring-avatars";

import {
  Blog,
  BlogBody,
  BlogAPIResponse,
  BlogListAPIResponse,
} from "../types/blogTypes";

import { fetchBlogs as defaultFetchBlogs } from "../../api/blog";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatBubbleLeftRightIcon,
  ArrowSmallRightIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import "../styles.css";

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
      <div className="post-card rounded-3 bg-white mt-2">
        {/* votes */}
        <div className="vote container left">
          <div className="left-right">
            <ArrowUpIcon className="voteButtons" />
            <p className="spacing">1.1k</p>
            <ArrowDownIcon className="voteButtons" />
          </div>

          <div className="left-down">
            <div className="chat-style">
              <ChatBubbleLeftRightIcon className="voteButtons" />
              <p className="spacing">24</p>
            </div>

            <ArrowSmallRightIcon className="voteButtons" />
            <PencilIcon className="voteButtons" />
            <TrashIcon className="voteButtons" />
          </div>
        </div>

        <div className="right p-2 pb-1">
          <div className="card-header">
            <div className="avatar-style">
              <Avatar
                size={40}
                name="Maria Mitchell"
                variant="beam"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
              <h5 className="spacing">Ashley Pua Phee</h5>
            </div>

            <p className="spacing">6 hours ago</p>
          </div>

          <div>
            <p>@design-talks</p>
          </div>

          <div>
            <h5>First UI/UX Session in MG Bootcamp 2023</h5>
          </div>

          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f1aac9117592339.6078858c5ddba.jpg"
              className="card-image"
            />
          </div>
        </div>
      </div>

      <div className="post-card rounded-3 bg-white mt-2">
        {/* votes */}
        <div className="vote container left">
          <div className="left-right">
            <ArrowUpIcon className="voteButtons" />
            <p className="spacing">1.1k</p>
            <ArrowDownIcon className="voteButtons" />
          </div>

          <div className="left-down">
            <div className="chat-style">
              <ChatBubbleLeftRightIcon className="voteButtons" />
              <p className="spacing">24</p>
            </div>

            <ArrowSmallRightIcon className="voteButtons" />
            <PencilIcon className="voteButtons" />
            <TrashIcon className="voteButtons" />
          </div>
        </div>

        <div className="right p-2 pb-1">
          <div className="card-header">
            <div className="avatar-style">
              <Avatar
                size={40}
                variant="beam"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
              <h5 className="spacing">Ashley Pua Phee</h5>
            </div>

            <p className="spacing">6 hours ago</p>
          </div>

          <div>
            <p>@design-talks</p>
          </div>

          <div>
            <h5>First UI/UX Session in MG Bootcamp 2023</h5>
          </div>

          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f1aac9117592339.6078858c5ddba.jpg"
              className="card-image"
            />
          </div>
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
