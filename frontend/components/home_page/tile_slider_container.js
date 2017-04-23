import { connect } from 'react-redux';
import { fetchCampaigns } from '../../actions/campaign_actions';
import TileSlider from './tile_slider';

const mapStateToProps = (state) => {
      
  return {
    tiles: state.slider.campaigns
  };
};

const mapDispatchToProps = (dispatch) => {
    
  return {
    fetchCampaigns: () => dispatch(fetchCampaigns())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TileSlider);
