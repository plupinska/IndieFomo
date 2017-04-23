import { RECEIVE_CAMPAIGNS, RECEIVE_ERRORS} from '../actions/campaign_actions';
import merge from 'lodash/merge';

const TileSliderReducer = (oldState={}, action) => {
    
  Object.freeze(oldState);
  switch(action.type) {
    case "RECEIVE_CAMPAIGNS":
      const allCampaigns = action.campaigns;
      // this returns an array
      return allCampaigns;
    default:
      return oldState;
  }

};

export default TileSliderReducer;
