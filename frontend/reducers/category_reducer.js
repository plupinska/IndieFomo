import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY_ERRORS} from './actions/category_actions';
import merge from 'lodash/merge';

let oldState = Object.keys.freeze({
  campaign: null,
  errors: null
});

const categoryReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    case RECEIVE_CATEGORY_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default categoryReducer;
