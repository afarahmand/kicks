import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, signout }) => {
  let lastLink;

  if (currentUser) {
    lastLink = (
      <button onClick={() => signout()}>
        Sign out
      </button>
    );
  } else {
    lastLink = (
      <Link to='/signin'>
        Sign in
      </Link>
    );
  }

  return (
    <nav id="nav-bar">
      <div className="left-nav">
        <Link to="/discover">
          Explore
        </Link>
        <Link to="/projects/new">
          Start a project
        </Link>
      </div>
      <h1>
        <span id="one"   >Q</span>
        <span id="two"   >u</span>
        <span id="three" >i</span>
        <span id="four"  >k</span>
        <span id="five"  >s</span>
        <span id="six"   >t</span>
        <span id="seven" >a</span>
        <span id="eight" >r</span>
        <span id="nine"  >t</span>
        <span id="ten"   >e</span>
        <span id="eleven">r</span>
      </h1>
      <div className="right-nav">
        <div className="search">
          <Link to="/search">
            Search
            <i className="fas fa-search"></i>
          </Link>
        </div>
        {lastLink}
      </div>
    </nav>
  );
};

export default Navbar;
