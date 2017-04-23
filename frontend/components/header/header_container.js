import { connect } from 'react-redux';
import { logout, loginguest } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = (state) => {
    
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    logout: () => dispatch(logout()),
    loginguest: () => dispatch(loginguest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
