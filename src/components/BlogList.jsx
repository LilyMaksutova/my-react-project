/* eslint-disable react/prop-types */
import React from 'react';
import BlogItem from './BlogItem';

function BlogList(props) {
  const { blogs } = props;
  return (
    <div>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export default BlogList;
