import React from 'react';
import PostList from './PostList';
import blogList from '../blogData';

function Blog() {
  return (
    <div>
      <PostList posts={blogList} />
    </div>
  );
}

export default Blog;
