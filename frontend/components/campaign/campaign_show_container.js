import { connect } from 'react-redux';
import { fetchCampaign } from '../../actions/campaign_actions';
import CampaignShow from './campaign_show';

const mapStateToProps = (state, ownProps) => {
  let campaign = state.campaigns[ownProps.params.id];
  
  return {
    campaign
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignShow);
