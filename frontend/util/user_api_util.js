export const getUser = (id) => {

  return $.ajax({
    url: `api/users/${id}`
  });
};

export const editUser = (user) => {
  debugger
  return $.ajax({
    url: `api/users/${user.get("user[id]")}`,
    method: 'PATCH',
    dataType: "json",
    contentType: false,
    processData: false,
    data: user
  });
};
