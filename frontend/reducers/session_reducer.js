import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: null
});

const SessionReducer = (state = _nullUser, action) => {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;

      if (currentUser) {
        return merge({}, state, {currentUser: currentUser, errors: null} );
      } else {
        return _nullUser;
      }
    case RECEIVE_SESSION_ERRORS:
    debugger
      const errors = action.errors.base[0];
      return merge({}, _nullUser, {errors: errors});
    default:

      return state;
  }
};

export default SessionReducer;
