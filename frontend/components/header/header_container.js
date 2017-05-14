import { connect } from 'react-redux';
import { logout, loginguest } from '../../actions/session_actions';
import Header from './header';
import { searchCampaigns } from '../../actions/search_action';
import { getCategories } from '../../actions/category_actions';

const mapStateToProps = (state) => {
   
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    searchResults: state.searchResults,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    logout: () => dispatch(logout()),
    loginguest: () => dispatch(loginguest()),
    searchCampaigns: (sf) => dispatch(searchCampaigns(sf)),
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
