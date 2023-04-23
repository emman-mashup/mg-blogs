import fetch from "isomorphic-fetch";

import { User } from "../react/types/userTypes";
import {
  CommentListAPIResponse,
  CommentAPIResponse,
  CommentBody,
} from "../react/types/commentTypes";

export const fetchBlogComments = async (
  blog_id: number
): Promise<CommentListAPIResponse> => {
  const endpoint = "/api/blogs/" + blog_id + "/comments";
  const headers = {
    Accept: "application/json",
  };

  const response = await fetch(endpoint, { headers, method: "GET" });
  return response.json();
};

export const fetchUserComments = async (
  user_id: number
): Promise<CommentListAPIResponse> => {
  const endpoint = "/api/users/" + user_id + "/comments";
  const headers = {
    Accept: "application/json",
  };

  const response = await fetch(endpoint, { headers, method: "GET" });
  return response.json();
};

export const fetchCommentReplies = async (
    comment_id: number
  ): Promise<CommentListAPIResponse> => {
    const endpoint = "/api/comments/" + comment_id + "/comments";
    const headers = {
      Accept: "application/json",
    };
  
    const response = await fetch(endpoint, { headers, method: "GET" });
    return response.json();
  };

export const fetchComment = async (
  comment_id: number
): Promise<CommentAPIResponse> => {
  const endpoint = "/api/comments/" + comment_id;
  const headers = {
    Accept: "application/json",
  };

  const response = await fetch(endpoint, { headers, method: "GET" });
  return response.json();
};

export const createComment = async (
  body: CommentBody,
  user: User
): Promise<CommentAPIResponse> => {
  const endpoint = "/api/comments";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  body.comment.userId = user.id;

  const serializedBody = JSON.stringify(body);
  const response = await fetch(endpoint, {
    headers,
    method: "POST",
    body: serializedBody,
  });

  return response.json();
};
