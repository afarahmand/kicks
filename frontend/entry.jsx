import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
// import configureStore from './store/store';

// import { signin, signout, signup }
//   from './utils/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  // const store = configureStore();

  // window.signin = signin;
  // window.signout = signout;
  // window.signup = signup;

  //ReactDOM.render(<Root store={store}/>, root);
  ReactDOM.render(<h1> React is working... </h1>, root);
});
