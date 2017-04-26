import { RECEIVE_CONTRIBUTION, RECEIVE_CAMPAIGN_ERRORS } from '../actions/contribution_actions';
import merge from 'lodash/merge';


const ContributionReducer = (state = {}, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_CONTRIBUTION:
      let old = merge({}, state);
          debugger
      return merge(old, action.contribution);
    case RECEIVE_CAMPAIGN_ERRORS:
      let old1 = merge({}, state);
          debugger
      return merge(old1, action.contribution);
    default:
      return state;
  }
};

export default ContributionReducer;
