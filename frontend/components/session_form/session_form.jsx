import React from 'react';
import { Link, withRouter } from 'react-router';

class sessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <div className="auth-form-container">
        <ul>
          <li><Link to="/sign-up">Sign Up</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
        </ul>
      </div>
    );
  }
}

export default sessionForm;
