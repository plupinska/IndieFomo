import React from 'react';
import NavBar from './navbar';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => {
  return(
    <div id="app">
      <h1 className="logo">Welcome To Indie Fomo</h1>
      <GreetingContainer />
      {children}
    </div>
  );
};

export default App;
