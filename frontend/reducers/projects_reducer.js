import { merge } from 'lodash';
import {
  RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState = merge({}, oldState);
      newState[action.project.id] = action.project;
      return newState;
    case REMOVE_PROJECT:
      newState = merge({}, oldState);
      delete newState[action.projectId];  // newState.projects?
      return newState;
    default:
      return oldState;
  }
};

export default projectsReducer;


// export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
// export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
// export const REMOVE_PROJECT = "REMOVE_PROJECT";
// export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
