export const getCampaigns = () => {
  return $.ajax({
    url: `/api/campaigns`
  });
};

export const getCampaign = (id) => {
  return $.ajax({
    url: `/api/campaigns/${id}`
  });
};

export const updateCampaign = (campaign) => {
  return $.ajax({
    url: `/api/campaigns/${campaign.id}`,
    method: 'PATCH',
    data: {campaign}
  });
};

export const createCampaign = (campaign) => {
  return $.ajax({
    url: `api/campaigns`,
    method: `POST`,
    data: {campaign},
  });
};
