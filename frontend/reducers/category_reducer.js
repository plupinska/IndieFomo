import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY_ERRORS} from '../actions/category_actions';
import merge from 'lodash/merge';


const categoryReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categoryReducer;
