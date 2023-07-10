/* eslint-disable react/prop-types */
import { React } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostDescription from './PostDescription';
import blogList from '../blogData';

function PostDetails() {
  const { id } = useParams();
  const post = blogList.filter((data) => data.id === parseInt(id, 10))[0];
  return (
    <div>
      <Link to="/blog/" style={{ display: 'block', margin: '0 0 30px 20px' }}>
        Вернуться к списку
      </Link>
      <PostDescription post={post} />
    </div>
  );
}

export default PostDetails;
