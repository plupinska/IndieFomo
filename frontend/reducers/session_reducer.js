import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: {}
});

const SessionReducer = (state = _nullUser, action) => {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;

      if (currentUser) {
        return merge({}, state, {currentUser: currentUser} );
      } else {
        return merge({}, state);
      }
    case RECEIVE_SESSION_ERRORS:

      const errors = action.errors;
      return merge({}, _nullUser, {errors: action.errors.responseText});
    default:

      return state;
  }
};

export default SessionReducer;
