 import * as ContributionApiUtil from '../util/contributions_api_util';
export const RECEIVE_CONTRIBUTION = 'RECEIVE_CONTRIBUTION';
export const RECEIVE_CONTRIBUTION_ERRORS = 'RECEIVE_ERRORS';

export const receiveContribution = (contribution) => {
  return {
    type: RECEIVE_CONTRIBUTION,
    contribution: contribution
  };
};

export const receiveContributionErrors = (errors) => {
  return {
    type: RECEIVE_CONTRIBUTION_ERRORS,
    errors: errors
  };
};

export const getContribution = (id) => (dispatch)  => {

  return ContributionApiUtil.getContribution(id)
    .then((cont) => dispatch(receiveContribution(cont)),
    (err) => dispatch(receiveContributionErrors(err)));
};

export const makeContribution = (contribution) => (dispatch) => {

  return ContributionApiUtil.makeContribution(contribution)
    .then((cont) => dispatch(receiveContribution(cont)),
    (err) => dispatch(receiveContributionErrors(err)));
};
