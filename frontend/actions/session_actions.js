import * as SessionApiUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signin = user => dispatch => (
  SessionApiUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err))
  )
);

export const signout = () => dispatch => (
  SessionApiUtil.logout().then(
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
