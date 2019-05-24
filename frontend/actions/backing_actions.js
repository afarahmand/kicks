import * as BackingApiUtil from '../utils/backing_api_util';

export const RECEIVE_BACKING = "RECEIVE_BACKING";
export const RECEIVE_BACKING_ERRORS = "RECEIVE_BACKING_ERRORS";

const receiveBacking = backing => ({
  type: RECEIVE_BACKING,
  backing: backing.backing
});

const receiveBackingErrors = errors => ({
  type: RECEIVE_BACKING_ERRORS,
  errors
});

export const createBacking = backing => dispatch => (
  BackingApiUtil.createBacking(backing).then(
    dbBacking => dispatch(receiveBacking(dbBacking)),
    err => dispatch(receiveBackingErrors(err))
  )
);
