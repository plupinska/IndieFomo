export const getCampaigns = (number = 'all', category = "none") => {

  return $.ajax({
    url: `/api/campaigns`,
    data: { num: number, category: category},
    method: 'GET'
  });
};

export const getCampaign = (id) => {
  return $.ajax({
    url: `/api/campaigns/${id}`
  });
};

export const updateCampaignForm = (campaign) => {
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

export const updateCampaign = (campaign) => {
  return $.ajax({
    url: `/api/campaigns/${campaign.id}`,
    method: 'PATCH',
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
