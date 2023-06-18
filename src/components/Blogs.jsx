import React from 'react';
import BlogList from './BlogList';
import blogList from '../data';

function Blogs() {
  return (
    <div>
      <BlogList blogs={blogList} />
    </div>
  );
}

export default Blogs;
