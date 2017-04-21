import React from 'react';
import NavBar from './navbar';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = ({children}) => {
  return(
    <div id="app">
      <div className="header">
        <Link className="logo" to="/">Indie Fomo</Link>
        <GreetingContainer />
      </div>
      {children}
    </div>
  );
};
// renders all children. must remember to style accordingly.

export default App;
