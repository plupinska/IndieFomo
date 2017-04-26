import { connect } from 'react-redux';
import { fetchCampaign } from '../../actions/campaign_actions';
import { getUser } from '../../actions/user_actions';
import CampaignShow from './campaign_show';

const mapStateToProps = (state, ownProps) => {
  let campaignId = ownProps.params.id;
  return {
    campaignId
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    getUser: (id) => dispatch(getUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignShow);
