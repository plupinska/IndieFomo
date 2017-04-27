export const makeContribution = (contribution) => {

  return $.ajax({
    method: 'POST',
    url: `api/contributions`,
    data: contribution
  });
};

export const fetchContribution = (id) => {
  return $.ajax({
    url: `api/contributions/${id}`
  });
};
