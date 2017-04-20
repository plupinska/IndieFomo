import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';
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
        return merge({}, _nullUser, {currentUser: currentUser} );
      } else {
        return merge({}, _nullUser);
      }
    case RECEIVE_ERRORS:
      const errors = action.errors;

      return merge({}, _nullUser, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
