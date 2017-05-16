import { RECEIVE_CONTRIBUTION, RECEIVE_CONTRIBUTION_ERRORS } from '../actions/contribution_actions';
import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import merge from 'lodash/merge';


const ContributionReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_CONTRIBUTION:

      let old = merge({}, state);
      if (old.errors) {

        old.errors = "";
      }
      return merge(old, action.contribution);
    case RECEIVE_CONTRIBUTION_ERRORS:

      let old1 = merge({}, state);
      return merge(old1, { errors: action.errors.responseText});
    case RECEIVE_CAMPAIGN:
      let old2 = merge({}, state);
      return merge(old2, { errors: ""});
    case RECEIVE_CAMPAIGNS:
    let old3 = merge({}, state);
    return merge(old3, { errors: ""});
    default:
      return state;
  }
};

export default ContributionReducer;
