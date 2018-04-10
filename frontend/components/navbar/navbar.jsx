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
      <Link to="/">
        <h1>
          QUIKSTARTER
        </h1>
      </Link>
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
