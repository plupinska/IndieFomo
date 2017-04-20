export const selectCampaigns = (state) => {
  debugger
  return Object.keys(state.campaigns).map(key => state.campaigns[key]);
};
