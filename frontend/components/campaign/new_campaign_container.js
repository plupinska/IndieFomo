import { connect } from 'react-redux';
import { createCampaign } from '../../actions/campaign_actions';
import NewCampaign from './new_campaign';

const mapStateToProps = (state) => {
    debugger
  return {
    user: state.session.currentUser,
    errors: state.campaigns.errors
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createCampaign: (camp) => dispatch(createCampaign(camp))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampaign);
