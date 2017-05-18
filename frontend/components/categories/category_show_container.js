import { connect } from 'react-redux';
import { fetchCampaigns, fetchCampaign } from '../../actions/campaign_actions';
import CategoryShow from './category_show';
import { selectCampaigns } from '../../reducers/selectors';
import { getCategories } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  let camps;

  if (state.campaigns) {
    if (!state.campaigns.campaign && !Object.keys(state.campaigns)) {
        camps = [];
    } else if (state.campaigns) {

      camps = Object.keys(state.campaigns).map((key) => state.campaigns[key]);
    }
  }


  return {
     categoryId: ownProps.params.id,
     campaigns: camps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampaigns: (number, category) => dispatch(fetchCampaigns(number, category)),
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);
