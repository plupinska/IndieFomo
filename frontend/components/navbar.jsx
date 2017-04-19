import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
// <SessionFormContainer/>
const NavBar = ({children}) => {
  return(
    <div>
    <SessionFormContainer/>
    {children}
    </div>
  );
};

export default NavBar;
