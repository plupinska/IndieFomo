import { RECEIVE_USER, UPDATE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _user = Object.freeze({
  user: null,
  errors: {}
});

const UserReducer = (state = _user, action) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_USER:
    debugger
      const receivedUser = action.user;

      return merge({},state, action.user);
    case UPDATE_USER:
    debugger
      return merge({}, state, action.user);
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
    debugger
      return state;
  }
};

export default UserReducer;
