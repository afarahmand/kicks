import * as SessionApiUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signin = user => dispatch => (
  SessionApiUtil.signin(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err))
  )
);

export const signout = () => dispatch => (
  SessionApiUtil.signout().then(
    () => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveErrors(err))
  )
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err))
  )
);
