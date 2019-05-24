import { merge } from 'lodash';

import { RECEIVE_BACKING } from '../actions/backing_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const backingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_BACKING:
      newState = merge({}, oldState);
      newState[action.backing.id] = action.backing;
      return newState;

    case RECEIVE_PROJECT:
      newState = merge({}, oldState);
      Object.keys(action.backings).forEach(backingId => {
        newState[backingId] = action.backings[backingId];
      });
      return newState;

    case RECEIVE_USER:
      newState = merge({}, oldState);
      Object.keys(action.backings).forEach(backingId => {
        newState[backingId] = action.backings[backingId];
      });
      return newState;

    default:
      return oldState;
  }
};

export default backingsReducer;
