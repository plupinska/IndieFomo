import { connect } from 'react-redux';
import { fetchCampaigns, fetchCampaign } from '../../actions/campaign_actions';
import CampaignIndex from './campaign_index';
import { selectCampaigns } from '../../reducers/selectors';
import { makeContribution } from '../../actions/contribution_actions';

const mapStateToProps = (state) =>  {
    let camps = null;
    if (state.campaigns){
      camps = Object.keys(state.campaigns).map((el) => state.campaigns[el]);
    }
  return {
    campaigns: camps,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    makeContribution: (contribution) => dispatch(makeContribution(contribution))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignIndex);
