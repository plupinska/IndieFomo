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
// Campaign is nested inside of form data, we retreive it with get
  return $.ajax({
    url: `/api/campaigns/${campaign.get("campaign[id]")}`,
    method: 'PATCH',
    dataType: "json",
    contentType: false,
    processData: false,
    data: campaign
  });
};

export const createCampaign = (campaign) => {
  return $.ajax({
    url: `api/campaigns`,
    method: `POST`,
    data: {campaign},
  });
};
