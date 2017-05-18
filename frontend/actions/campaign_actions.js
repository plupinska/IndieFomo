import * as CampaignApiUtil from '../util/campaign_api_util';
export const RECEIVE_CAMPAIGNS = "RECEIVE_CAMPAIGNS";
export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";
export const RECEIVE_CAMPAIGN_ERRORS = "RECEIVE_CAMPAIGN_ERRORS";

export const receiveCampaigns = (campaigns) => {

  return {
    type: RECEIVE_CAMPAIGNS,
    campaigns: campaigns
  };
};

export const receiveCampaign = (campaign) => {

  return {
    type: RECEIVE_CAMPAIGN,
    campaign: campaign
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_CAMPAIGN_ERRORS,
    errors: errors
  };
};

export const fetchCampaigns = (num, cat) => (dispatch) => {

  return CampaignApiUtil.getCampaigns(num, cat)
    .then((campaigns) => dispatch(receiveCampaigns(campaigns)),
    (err) => dispatch(receiveErrors(err)));
};

export const fetchCampaign = (id) => (dispatch) => {
  return CampaignApiUtil.getCampaign(id)
    .then((camp) => dispatch(receiveCampaign(camp)),
    (err) => dispatch(receiveErrors(err)));
};

export const createCampaign = (campaign) => (dispatch) => {

  return CampaignApiUtil.createCampaign(campaign)
    .then((camp) => dispatch(receiveCampaign(camp)),
    (err) => dispatch(receiveErrors(err)));
};

export const updateCampaign = (campaign) => (dispatch) => {

  return CampaignApiUtil.updateCampaign(campaign)
    .then((camp) => dispatch(receiveCampaign(camp)),
    (err) => dispatch(receiveErrors(err)));
};

export const updateCampaignForm = (campaign) => (dispatch) => {
   
  return CampaignApiUtil.updateCampaignForm(campaign)
    .then((camp) => dispatch(receiveCampaign(camp)),
    (err) => dispatch(receiveErrors(err)));
}
