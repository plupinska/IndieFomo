import { RECEIVE_USER, UPDATE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_USER:
      let x = merge({}, state, action.user);
      return x;
    case UPDATE_USER:
      return merge({}, state, action.user);
    default:
      return state;
  }
};

export default UserReducer;
