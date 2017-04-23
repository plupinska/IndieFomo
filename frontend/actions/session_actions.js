import * as SessionAPIUtil from '../util/auth_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {

  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const signup = (user) => (dispatch) => {

  return SessionAPIUtil.signUp(user)
    .then((usr) => {

      dispatch(receiveCurrentUser(usr) );
    },
      (err) => {
        dispatch(receiveErrors(err.responseJSON));

      });
};

export const login = (user) => (dispatch) => {

  return SessionAPIUtil.signIn(user)
    .then((usr) => dispatch(receiveCurrentUser(usr)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => (dispatch) => {

  return SessionAPIUtil.signOut()
  .then(user => dispatch(receiveCurrentUser(null)));
};
