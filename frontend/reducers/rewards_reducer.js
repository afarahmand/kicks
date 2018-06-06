import { merge } from 'lodash';
import {
  RECEIVE_REWARD,
  RECEIVE_REWARD_ERRORS,
  REMOVE_REWARD
} from '../actions/reward_actions';

import { RECEIVE_PROJECT } from '../actions/project_actions';

const rewardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_PROJECT:
      newState = merge({}, oldState);
      action.rewards.forEach(reward => {
        newState[reward.id] = reward;
      });
      return newState;

    case RECEIVE_REWARD:
      newState = merge({}, oldState);
      newState[action.reward.id] = action.reward;
      return newState;

    case REMOVE_REWARD:
      newState = merge({}, oldState);
      delete newState[action.rewardId];
      return newState;

    case RECEIVE_REWARD_ERRORS:
    default:
      return oldState;
  }
};

export default rewardsReducer;
