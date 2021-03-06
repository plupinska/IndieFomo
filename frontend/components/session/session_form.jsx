import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "Password",
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;

    this.props.processForm(user).then(() => this.props.modalClose());
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
        className="input">
        </input>

        <br/>

        <input type="text"
        placeholder={this.state.last_name}
        onChange={this.update("last_name")}
        className="input">
        </input>
        </div>
      );
    }
  }

  renderErrors() {
    if (this.props.errors) {

      return(
        <div className="session-errors">
          {this.props.errors}
        </div>
      );
    }
  }

  render() {
    return(
      <div className="auth-form">
        <form className="form" onSubmit={this.handleSubmit}>

          {this.handleFormType(this.props.formType)}

          <input type="text"
            placeholder={this.state.email}
            onChange={this.update("email")}
            className="input">
          </input>

          <br/>

          <input type="password"
            placeholder={this.state.password}
            onChange={this.update("password")}
            className="input">
          </input>
          <br/>
          <input className="input submit" type="submit"
            value="Submit" >
          </input>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
