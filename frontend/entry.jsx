import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// import { fetchSearchResults } from './utils/project_api_util';
//
// import {
//   fetchProjects,
//   fetchProject,
//   createProject,
//   updateProject,
//   deleteProject
// } from './actions/project_actions';
//
// import { formatAsYYYYMMDD } from './utils/date_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  let preloadedState = {
    session: {},
    entities: {
      categories: {
        1: "Art",
        2: "Fashion",
        3: "Film",
        4: "Food",
        5: "Games",
        6: "Technology"
      }
    }
  };

  if (window.currentUser) {
    preloadedState.session.currentUser = window.currentUser;
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore(preloadedState);
  }

  // window.formatAsYYYYMMDD = formatAsYYYYMMDD;
  // window.fetchSearchResults = fetchSearchResults;
  // window.fetchProjects = fetchProjects;
  // window.fetchProject = fetchProject;
  // window.createProject = createProject;
  // window.updateProject = updateProject;
  // window.deleteProject = deleteProject;
  // window.firstProject = {
  //   category: "Art",
  //   description: "description",
  //   funding_amount: 1,
  //   funding_end_date: "2018-09-04T13:12:52.594Z",
  //   id: 1,
  //   image_url: "https://imgur.com/a/ZgBj0",
  //   short_blurb: "blurb",
  //   title: "Test",
  //   user_id: 1
  // };
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={ store } />, root);
});
