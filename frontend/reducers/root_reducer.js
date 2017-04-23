import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import CampaignsReducer from './campaign_reducer';
import UserReducer from './user_reducer';
import TileSliderReducer from './tile_slider_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaigns: CampaignsReducer,
  user: UserReducer,
  slider: TileSliderReducer
});

export default RootReducer;
