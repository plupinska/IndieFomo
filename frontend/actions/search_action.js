import * as SearchApi from '../util/search_api_util';
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveSearch = (campaigns) => {
  return {
    type: RECEIVE_SEARCH,
    campaigns: campaigns
  };
};

export const searchCampaigns = (searchField) => (dispatch) => {
  return SearchApi.searchCampaigns(searchField)
    .then((camps) => dispatch(receiveSearch(camps)));
};
