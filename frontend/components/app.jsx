import React from 'react';
import NavBar from './navbar';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => {
  return(
    <div>
      <h1>Welcome To Indie Fomo</h1>
      <GreetingContainer />
      {children}
    </div>
  );
};

export default App;
