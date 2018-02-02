import * as SessionApiUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signin = user => dispatch => (
  SessionApiUtil.signin(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
);

export const signout = () => dispatch => (
  SessionApiUtil.signout().then(
    () => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
);
