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

      let x = merge({},state, {user: receivedUser});
      return x;
    case UPDATE_USER:

      return merge({}, state, action.user);
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default UserReducer;
