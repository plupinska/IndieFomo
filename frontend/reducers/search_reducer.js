import { RECEIVE_SEARCH  } from '../actions/search_action';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH:
      return action.campaigns;
    default:
      return state;

  }
};

export default SearchReducer;
