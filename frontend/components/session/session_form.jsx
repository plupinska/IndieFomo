import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "Password",
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirectIfLoggedIn() {

    if (this.props.loggedIn) {

      this.props.router.push('/');
    }
  }

  // renderErrors() {
  //   if (!this.props.errors) {
  //     return null;
  //   } else {
  //     return(
  //       <ul>
  //         {this.props.errors}
  //       </ul>
  //     );
  //   }
  // }

  componentWillReceiveProps() {
    this.redirectIfLoggedIn();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    debugger
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFormType(type) {
    if (this.props.formType === "signup") {
      return(
        <div className="signup-info">
        <input type="text"
        placeholder={this.state.first_name}
        onChange={this.update("first_name")}
        className="fname">
        </input>

        <br/>

        <input type="text"
        placeholder={this.state.last_name}
        onChange={this.update("last_name")}
        className="lname">
        </input>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>

          {this.handleFormType(this.props.formType)}

          <input type="text"
            placeholder={this.state.email}
            onChange={this.update("email")}
            className="email">
          </input>

          <br/>

          <input type="password"
            placeholder={this.state.password}
            onChange={this.update("password")}
            className="password">
          </input>
          <br/>
          <input type="submit"
            value="Submit" >
            </input>
        </form>
      </div>
    );
  }
}
// {this.renderErrors()}
export default withRouter(SessionForm);
