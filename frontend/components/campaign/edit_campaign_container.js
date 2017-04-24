import { connect } from 'react-redux';
import { fetchCampaign, updateCampaign } from '../../actions/campaign_actions';
import EditCampaign from './campaign_show';

const mapStateToProps = (state, ownProps) => {
  debugger
  let campaign = state.campaigns;
  return {
    campaign
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    updateCampaign: (campaign) => dispatch(updateCampaign(campaign))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampaign);
