import * as RewardApiUtil from '../utils/rewards_api_util';

export const RECEIVE_REWARD = "RECEIVE_REWARD";
export const RECEIVE_REWARD_ERRORS = "RECEIVE_REWARD_ERRORS";
export const REMOVE_REWARD = "REMOVE_REWARD";

const receiveReward = reward => ({
  type: RECEIVE_REWARD,
  reward: reward
});

const removeReward = rewardId => ({
  type: REMOVE_REWARD,
  rewardId
});

const receiveRewardErrors = errors => ({
  type: RECEIVE_REWARD_ERRORS,
  errors
});

export const createReward = reward => dispatch => (
  RewardApiUtil.createReward(reward).then(
    dbReward => dispatch(receiveReward(dbReward)),
    err => dispatch(receiveRewardErrors(err))
  )
);

export const updateReward = reward => dispatch => (
  RewardApiUtil.updateReward(reward).then(
    dbReward => dispatch(receiveReward(dbReward)),
    err => dispatch(receiveRewardErrors(err))
  )
);

export const deleteReward = reward => dispatch => (
  RewardApiUtil.deleteReward(reward).then(
    dbReward => dispatch(removeReward(dbReward.id)),
    err => dispatch(receiveRewardErrors(err))
  )
);
