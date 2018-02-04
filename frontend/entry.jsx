import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// import { signin, signout, signup }
//   from './actions/session_actions';

import {
  fetchProjects,
  fetchProject,
  createProject,
  updateProject,
  deleteProject
} from './actions/project_actions';

// import {
//   fetchProjects,
//   fetchProject,
//   createProject,
//   updateProject,
//   deleteProject
// } from './utils/project_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.signin = signin;
  // window.signout = signout;
  // window.signup = signup;

  window.fetchProjects = fetchProjects;
  window.fetchProject = fetchProject;
  window.createProject = createProject;
  window.updateProject = updateProject;
  window.deleteProject = deleteProject;
  window.firstProject = {
    category_id: 1,
    description: "description",
    funding_amount: 2,
    funding_end_date: "2018-09-04T13:12:52.594Z",
    id: 1,
    image_url: "https://imgur.com/a/ZgBj0",
    short_blurb: "blurb",
    title: "Test",
    user_id: 1
  };
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={ store } />, root);
});
