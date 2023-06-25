/* eslint-disable react/prop-types */
import { React } from 'react';
import { Link } from 'react-router-dom';
import PostDescription from './PostDescription';

function PostDetails({ post }) {
  const { text } = post;
  return (
    <div>
      <Link to="/blogs/" style={{ display: 'block', margin: '0 0 30px 20px' }}>
        Вернуться к списку
      </Link>
      <PostDescription post={post} />
      <p>{text}</p>
    </div>
  );
}

export default PostDetails;
