import { connect } from 'react-redux';
import { fetchCampaign } from '../../actions/campaign_actions';
import { getUser } from '../../actions/user_actions';
import CampaignShow from './campaign_show';
import { makeContribution } from '../../actions/contribution_actions';
import { selectRewards } from '../../reducers/selectors';
import { getAllRewards } from '../../actions/reward_actions';


const mapStateToProps = (state, ownProps) => {
  let campaignId = ownProps.params.id;
  let usr = state.session.currentUser;


  return {
    rewards: selectRewards(state),
    campaignId,
    campaign: state.campaigns.campaign,
    currentUser: usr,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    getUser: (id) => dispatch(getUser(id)),
    makeContribution: (contribution) => dispatch(makeContribution(contribution)),
    getAllRewards: (id) => dispatch(getAllRewards(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignShow);
