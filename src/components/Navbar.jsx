import React from 'react';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__link">
          <a href="/">Home</a>
        </li>
        <li className="nav__link">
          <a href="/">Workout</a>
        </li>
        <li className="nav__link">
          <a href="/">Notes</a>
        </li>
        <li className="nav__link">
          <a href="/">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
