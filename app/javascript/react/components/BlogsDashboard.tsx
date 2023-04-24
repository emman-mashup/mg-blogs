import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchCurrentUser } from "../../api/user";
import Avatar from "boring-avatars";
import { User } from "../types/userTypes";
import {
  Blog,
  BlogBody,
  BlogAPIResponse,
  BlogListAPIResponse,
} from "../types/blogTypes";
import { fetchAllBlogs as defaultFetchBlogs } from "../../api/blog";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatBubbleLeftRightIcon,
  ArrowSmallRightIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import "../styles.css";
import TimeAgo from "react-timeago";

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
      const user = await fetchCurrentUser();
      console.log(user);
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
      console.log(responseBlogs);
    } catch {
      console.error("failed to get blogs");
    }
  };

  return (
    <>
      {blogs.map((blog: Blog, index: number) => (
        <div className="post-card rounded-3 bg-white mt-2" key={index}>
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
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                />
                <h5 className="spacing">
                  {blog["user"]["firstname"]} {blog["user"]["lastname"]}
                </h5>
              </div>

              <p className="spacing">
                <TimeAgo date={blog.createdAt} />
              </p>
            </div>

            <div>
              <p>@design-talks</p>
            </div>

            <div>
              <h5>{blog.title}</h5>
            </div>

            <div>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f1aac9117592339.6078858c5ddba.jpg"
                className="card-image"
              />
              {blog.content}
            </div>
          </div>
        </div>
      ))}
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
