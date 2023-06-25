/* eslint-disable react/prop-types */
import React from 'react';
import PostPreview from './PostPreview';

function PostList(props) {
  const { posts } = props;
  return (
    <div>
      {posts.map((post) => (
        <PostPreview post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
