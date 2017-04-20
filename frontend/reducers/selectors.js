export const selectCampaigns = (state) => {
  return Object.keys(state.campaigns).map(key => state.campaigns[key]);
};
