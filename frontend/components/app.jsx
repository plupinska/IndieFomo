import React from 'react';
import NavBar from './navbar';
import SessionFormContainer from './session_form/session_form_container';

const App = ({children}) => {
  return(
    <div>
      <h1>Welcome To Indie Fomo</h1>
      <SessionFormContainer/>
      {children}
    </div>
  );
};

export default App;
