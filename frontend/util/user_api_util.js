export const getUser = (id) => {
  return $.ajax({
    url: `api/users/${id}`
  });
};

export const editUser = (user) => {
  return $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: {user}
  });
};
