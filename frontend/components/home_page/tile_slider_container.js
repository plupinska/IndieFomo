import { connect } from 'react-redux';
import { fetchCampaigns } from '../../actions/campaign_actions';
import TileSlider from './tile_slider';
import { selectCampaigns } from '../../reducers/selectors';

const mapStateToProps = (state) => {

  return {
    campaigns: selectCampaigns(state),
    // loggedIn: Boolean(session.currentUser),
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
     fetchCampaigns: (num) => dispatch(fetchCampaigns(num))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TileSlider);
