import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import CampaignsReducer from './campaign_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaigns: CampaignsReducer,
  user: UserReducer
});

export default RootReducer;
