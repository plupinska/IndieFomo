import React from 'react';
import HeaderContainer from './header/header_container';
import { Link } from 'react-router';


const App = ({children}) => {
  return(
    <div className="indie-fomo">
      <div id="app">
          <div className="header">
            <Link className="logo" to="/">Indie Fomo
            </Link>
            <div className="search">Search </div>
            <HeaderContainer />
        </div>
        {children}
      </div>
    </div>
  );
};

// <div className="inner-app">
// </div>
// renders all children. must remember to style accordingly.

export default App;
