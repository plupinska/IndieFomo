import { connect } from 'react-redux';
import { fetchCampaign } from '../../actions/campaign_actions';
import { getUser } from '../../actions/user_actions';
import CampaignShow from './campaign_show';
import { makeContribution } from '../../actions/contribution_actions';

const mapStateToProps = (state, ownProps) => {
  let campaignId = ownProps.params.id;

  return {
    campaignId,
    user: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    getUser: (id) => dispatch(getUser(id)),
    makeContribution: (contribution) => dispatch(makeContribution(contribution))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignShow);
