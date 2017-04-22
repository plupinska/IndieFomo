import React from 'react';
import NavBar from './navbar';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';


const App = ({children}) => {
  return(
    <div className="indie-fomo">
      <div id="app">
          <div className="header">
            <Link className="logo" to="/">Indie Fomo
            <i class="fa fa-hand-spock-o" aria-hidden="true"></i>
            </Link>
            <div className="search">Search </div>
            <GreetingContainer />
        </div>
        {children}
      </div>
    </div>
  );
};

<div className="inner-app">
</div>
// renders all children. must remember to style accordingly.

export default App;
