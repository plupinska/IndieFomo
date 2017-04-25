import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN, RECEIVE_CAMPAIGN_ERRORS} from '../actions/campaign_actions';
import merge from 'lodash/merge';

let _oldState = Object.freeze({
  campaign: null,
  errors: {}
});

const CampaignsReducer = (state = _oldState, action) => {

  switch(action.type) {
    case "RECEIVE_CAMPAIGNS":
      const allCampaigns = action.campaigns;
      // this returns an array

      const oldS = merge({}, state);
      let x =  merge({}, oldS, {campaign: action.campaigns});

      return x;
    case  "RECEIVE_CAMPAIGN":
      const newState = merge({}, state);
      let y = merge(newState, {campaign: action.campaign});

      return y;

    case "RECEIVE_CAMPAIGN_ERRORS":
      return merge(state, {errors: action.errors.statusText});

    default:
      return state;
  }
};

export default CampaignsReducer;
