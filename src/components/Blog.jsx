import { React } from 'react';
import { Link } from 'react-router-dom';
// import blogList from '../data';

function Blog() {
  return (
    <div>
      <Link to="/blogs/" style={{ display: 'block', margin: '0 0 30px 20px' }}>
        Вернуться к списку
      </Link>
    </div>
  );
}

export default Blog;
