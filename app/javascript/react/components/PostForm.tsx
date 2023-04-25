import React, { useState, useEffect, ChangeEvent } from 'react';
import { fetchCurrentUser } from '../../api/user';
import { BlogBody, BlogAPIResponse } from '../types/blogTypes';
import { createBlog as defaultCreateBlog } from '../../api/blog';

import '../styles.css';

export type PostFormProps = {
  createBlog?: (body: BlogBody) => Promise<BlogAPIResponse>;
};

const PostForm = ({ createBlog = defaultCreateBlog }: PostFormProps) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentContent(event.target.value);
  };

  const formSubmit = async () => {
    try {
      const body: BlogBody = {
        blog: {
          title: currentTitle,
          content: currentContent,
        },
      };
      const response = await createBlog(body);
      if (response) {
        window.location.href = '/';
        alert('Post successfully created!');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <div className="row">
          <div
            className="container mt-5 p-3"
            style={{ maxWidth: 840, padding: 0 }}
          >
            <div className="header-card">
              <h4 className="spacing">Create Post</h4>
              <div className="header-head">
                <p className="spacing">Drafts</p>
                <button className="btn btn-primary post-button">12</button>
              </div>
            </div>

            <div className="card-body card">
              <p>Title</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control title-input"
                  onChange={handleTitleChange}
                />
              </div>

              <p>Body text</p>
              <div className="form-group">
                <textarea
                  className="form-control body-input"
                  onChange={handleContentChange}
                />
              </div>

              <p>Tags</p>
              <div className="card-footer">
                <button className="btn btn-outline-primary">
                  Save as Draft
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={formSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PostForm;
