if @user
  json.extract! @user, :first_name, :last_name, :email, :id
else
  {user: null}
end
