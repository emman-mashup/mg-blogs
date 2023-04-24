import { define } from 'remount';

import BlogsDashboard from './components/BlogsDashboard';
import PostForm from './components/PostForm';
import UserProfile from './components/UserProfile';

define({
  'blogs-dashboard': BlogsDashboard,
  'post-form': PostForm,
  'user-profile': UserProfile,
});
