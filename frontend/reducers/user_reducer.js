import { RECEIVE_USER, UPDATE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _user = Object.freeze({
  user: null,
  errors: {}
});

const UserReducer = (state = _user, action) => {

  switch(action.type) {
    case RECEIVE_USER:
      const receivedUser = action.user;
      return merge({}, _user, {user: action.user});
    case UPDATE_USER:
      return merge({}, _user, {user: action.user});
    case RECEIVE_ERRORS:
      return merge({}, _user, {errors: action.errors});
    default:
      return state;
  }
};

export default UserReducer;
