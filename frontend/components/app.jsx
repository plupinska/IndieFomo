import React from 'react';
import HeaderContainer from './header/header_container';
import { Link } from 'react-router';


const App = ({children}) => {
  return(
    <div className="indie-fomo">
      <div id="app">
          <div className="header">
            <Link className="logo" to="/yolo">Indie Fomo
            </Link>
            <div className="search">Search </div>
            <div className="createCampaign">
              <Link>Create A Campaign</Link>
            </div>
            <HeaderContainer />
        </div>
        {children}
      </div>
    </div>
  );
};



export default App;
