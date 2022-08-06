import React from 'react';
import PostsList from './features/posts/PostsList';
import css from './App.css';
import AddPostForm from './features/posts/AddPostForm';

const App = () => {
  return (
    <div>
      <AddPostForm/>
      <PostsList/>
    </div>
  );
};

export default App;
