import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => {
  return(
    <div className="auth-form-container">
      <ul>
        <li id="signup-link"><Link to="/signup">Sign Up</Link></li>
        <li id="signin-link"><Link to="/login">Sign In</Link></li>
      </ul>
    </div>
  );
};

const userGreeting = (props) => (
  <div className="greet">
    <ul>
      <li className="name">Hi, {props.currentUser.first_name} </li>
      <li><button onClick={props.logout}>Log Out</button> </li>
    </ul>
  </div>
);

const Greeting = (props) => {
  debugger
  return(props.currentUser ? userGreeting(props) : sessionLinks());
};



export default Greeting;
