import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import CampaignsReducer from './campaign_reducer';
import UserReducer from './user_reducer';
import TileSliderReducer from './tile_slider_reducer';
import ContributionReducer from './contribution_reducer';
import RewardsReducer from './rewards_reducer';
import categoryReducer from './category_reducer';
import SearchReducer from './search_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  campaigns: CampaignsReducer,
  user: UserReducer,
  slider: TileSliderReducer,
  contribution: ContributionReducer,
  rewards: RewardsReducer,
  categories: categoryReducer,
  searchResults: SearchReducer
});

export default RootReducer;
