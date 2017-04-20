import { connect } from 'react-redux';
import { fetchCampaigns, fetchCampaign } from '../../actions/campaign_actions';
import CampaignIndex from './campaign_index';
import { selectCampaigns } from '../../reducers/selectors';

const mapStateToProps = (state) =>  {

  return {
    campaigns: selectCampaigns(state),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    fetchCampaign: (id) => dispatch(fetchCampaign(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignIndex);
