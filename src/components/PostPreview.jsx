/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PostDescription from './PostDescription';

function PostPreview({ post }) {
  const { id, link } = post;
  return (
    <div style={{ margin: '40px' }}>
      <PostDescription post={post} />
      <Link
        to={`/blogs/${id}`}
        style={{ display: 'block', textAlign: 'right' }}
      >
        {link}
      </Link>
    </div>
  );
}

export default PostPreview;
