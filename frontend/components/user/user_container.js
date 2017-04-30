import { connect } from 'react-redux';
import { getUser, editUser } from '../../actions/user_actions';
import UserShow from './user_show';
import { fetchCampaign } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    user: state.user,
    loggedIn: Boolean(state.session.currentUser),
    campaigns: state.user.campaigns,
    contributions: state.user.contributions
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    getUser: (id) => dispatch(getUser(id)),
    editUser: (user) => dispatch(editUser(user)),
    fetchCampaign: (id) => dispatch(fetchCampaign(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
