export const selectCampaigns = (state) => {
    
  if (state.campaigns.campaign) {
    return Object.keys(state.campaigns.campaign).map(key => state.campaigns.campaign[key]);
  } else {
    // because we need to check if we have campaigns in render method
    // of campaign index
    return [null];
  }

};

export const selectRewards = (state) => {

  if (state.rewards) {

    return Object.keys(state.rewards).map(key => state.rewards[key]);

  } else {
    // because we need to check if we have campaigns in render method
    // of campaign index

    return [null];
  }

};
