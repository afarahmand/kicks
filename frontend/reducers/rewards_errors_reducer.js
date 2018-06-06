import { merge } from 'lodash';
import {
  RECEIVE_REWARD,
  RECEIVE_REWARD_ERRORS
} from '../actions/reward_actions';

const rewardsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_REWARD:
      return [];
    case RECEIVE_REWARD_ERRORS:
      return action.errors.responseJSON;
    default:
      return oldState;
  }
};

export default rewardsErrorsReducer;
