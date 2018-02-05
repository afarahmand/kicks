import React from 'react';
import { Link } from 'react-router-dom';

const greetingSignedin = (currentUser, signout) => {
  return (
    <div>
      <span>Hi, {currentUser.name}</span>
      <br></br>
      <Link to="/projects/new">/projects/new</Link>
      <br></br>
      <button onClick={() => signout()}>Sign Out</button>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

const greetingSignedout = () => {
  return (
    <div>
      <Link to="/signup">
        Sign Up
      </Link>

      <Link to="/signin">
        Sign In
      </Link>
    </div>
  );
};

const Greeting = ({ currentUser, signout }) => (
  currentUser ? greetingSignedin(currentUser, signout) : greetingSignedout()
);

export default Greeting;
