import React from 'react';

function PostDescription({ post }) {
  const { title, img, description } = post;
  return (
    <div>
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
    </div>
  );
}

export default PostDescription;
