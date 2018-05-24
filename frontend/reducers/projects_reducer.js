import { merge } from 'lodash';
import {
  RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  RECEIVE_PROJECT_ERRORS,
  REMOVE_PROJECT
} from '../actions/project_actions';

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {

    case RECEIVE_ALL_PROJECTS:
      newState = merge({}, oldState);
      action.projects.forEach(project => {
        newState[project.id] = project;
      });
      return newState;

    case RECEIVE_PROJECT:
      newState = merge({}, oldState);
      newState[action.project.id] = action.project;
      return newState;

    case REMOVE_PROJECT:
      newState = merge({}, oldState);
      delete newState[action.projectId];  // newState.projects?
      return newState;

    case RECEIVE_PROJECT_ERRORS:
    default:
      return oldState;
  }
};

export default projectsReducer;
