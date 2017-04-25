import { connect } from 'react-redux';
import { fetchCampaign, updateCampaign } from '../../actions/campaign_actions';
import EditCampaign from './edit_campaign_component';

const mapStateToProps = (state, ownProps) => {

  let campaign = state.campaigns;

  return {
    campaign,
    user: state.session.currentUser,
    // errors: state.campaigns.campaign.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    updateCampaign: (campaign) => dispatch(updateCampaign(campaign))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampaign);
