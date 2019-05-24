import * as UserApiUtil from '../utils/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  backings: user.backings,
  backed_projects: user.backed_projects,
  created_projects: user.created_projects,
  rewards: user.rewards,
  user: user.user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveUserErrors(err))
  )
);
