import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const getUser = (id) => (dispatch) => {
  return UserAPIUtil.getUser(id)
    .then((usr) => dispatch(receiveUser(usr)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const editUser = (user) => (dispatch) => {
  return UserAPIUtil.editUser(user)
    .then((usr) => dispatch(receiveUser(usr)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};
