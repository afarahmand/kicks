import { merge } from 'lodash';
import {
  RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT
} from '../actions/project_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      newState = merge({}, oldState);
      action.users.forEach(user => {
        newState[user.id] = user;
      });
      return newState;

    case RECEIVE_PROJECT:
      newState = merge({}, oldState);
      newState[action.user.id] = action.user;
      return newState;

    default:
      return oldState;
  }
};

export default usersReducer;
