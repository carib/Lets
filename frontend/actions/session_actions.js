import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const login = user => dispatch => {
  return ApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const signup = user => dispatch => {
  return ApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const logout = user => dispatch => {
  return ApiUtil.logout()
    .then(dispatch(receiveCurrentUser(null)))
}
