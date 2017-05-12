export const createReward = (reward) => {

  return $.ajax({
    url: `api/campaigns/${reward.campaign_id}/rewards`,
    method: 'POST',
    data: reward,
  });
};

export const editReward = (reward) => {
  return $.ajax({
    url: `api/campaigns/${reward.campaign_id}/rewards/${reward.id}`,
    method: 'PATCH',
    data: reward
  });
};

export const deleteReward = (reward) => {

  return $.ajax({
    url: `api/campaigns/${reward.campaign_id}/rewards/${reward.id}`,
    method: 'DELETE'
  });
};

export const getReward = (reward) => {
  return $.ajax({
    url: `api/campaigns/${reward.campaign_id}/rewards/${reward.id}`,
  });
};

export const getAllRewards = (id) => {
  return $.ajax({
    url: `api/campaigns/${id}/rewards`
  });
};
