import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const CampaignsReducer = (oldState={}, action) => {
debugger
Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CAMPAIGNS:
    debugger
      const allCampaigns = action.campaigns;
      // this returns an array
      debugger
        return allCampaigns;
    case RECEIVE_CAMPAIGN:
      const newState = merge({}, oldState);

      return merge(newState, action.campaign);
    case RECEIVE_ERRORS:
      return merge(oldState, action.errors);

    default:

      return oldState;
  }

};

export default CampaignsReducer;
