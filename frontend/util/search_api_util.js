export const searchCampaigns = (searchField) => {
   
  return $.ajax({
    url: 'api/search',
    data: {searchField: searchField}
  });
};
