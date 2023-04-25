import { define } from 'remount';

import BlogsDashboard from './components/BlogsDashboard';
import PostForm from './components/PostForm';
import UserProfile from './components/UserProfile';
import ShowPost from './components/ShowPost';

define({
  'blogs-dashboard': BlogsDashboard,
  'post-form': PostForm,
  'user-profile': UserProfile,
  'show-post': ShowPost,
});
