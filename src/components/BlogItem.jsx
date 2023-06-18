/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function BlogItem({ blog }) {
  const { id, title, img, description, link } = blog;
  return (
    <div style={{ margin: '40px' }}>
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <img src={img} alt="" />
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
      <Link
        to={`/blogs/${id}`}
        style={{ display: 'block', textAlign: 'right' }}
      >
        {link}
      </Link>
    </div>
  );
}

export default BlogItem;
