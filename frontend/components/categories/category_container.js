import { connect } from 'react-redux';
import {getCategories} from '../../actions/category_actions';
import CategoryIndex from './category_index';


const mapStateToProps = (state) => {

  return {
    categories: state.categories,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
