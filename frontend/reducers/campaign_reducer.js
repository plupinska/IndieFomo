import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN, RECEIVE_ERRORS} from '../actions/campaign_actions';
import merge from 'lodash/merge';



const CampaignsReducer = (oldState={}, action) => {


  const test = RECEIVE_CAMPAIGNS;

Object.freeze(oldState);
  switch(action.type) {
    case "RECEIVE_CAMPAIGNS":

      const allCampaigns = action.campaigns;
      // this returns an array

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
