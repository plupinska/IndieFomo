import React from 'react';
import NavBar from './navbar';

const App = ({children}) => {
  return(
    <div>
      <h1>Welcome To Indie Fomo</h1>
      <NavBar/>
    </div>
  );
};

export default App;
