import { connect } from 'react-redux';
import { getUser, editUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = ( state ) => {

  return {
    user: state.user,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    getUser: (id) => dispatch(getUser(id)),
    editUser: (user) => dispatch(editUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
