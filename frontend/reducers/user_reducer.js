import { RECEIVE_USER, UPDATE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_USER:

      const receivedUser = action.user;
      let x = merge({}, state, receivedUser);
      return x;
    case UPDATE_USER:
      return merge({}, state, receivedUser);
    default:
      return state;
  }
};

export default UserReducer;
