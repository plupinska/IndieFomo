export const selectCampaigns = (state) => {

  if (state.campaigns.campaign) {
    return Object.keys(state.campaigns.campaign).map(key => state.campaigns.campaign[key]);
  } else {
    return [null];
  }

};

export const selectRewards = (state) => {

  if (state.rewards) {
    return Object.keys(state.rewards).map(key => state.rewards[key]);
  } else {
    return [null];
  }

};
