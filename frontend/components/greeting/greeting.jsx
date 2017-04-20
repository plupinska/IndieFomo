import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../../app/assets/stylesheets/modal_style';
import SessionFormContainer from '../session/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.userGreeting = this.userGreeting.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);

    this.state = {modalOpen: false,
                  currentUser: this.props.currentUser,
                  formType: ""
                  };
  }

  handleClick(str) {
    return (e) => {
      this.setState({ modalOpen: true, formType: str });
    };
  }

  onModalClose() {
    this.setState({ modalOpen: false});
  }

  sessionLinks() {

    return(
      <div className="auth-form-container">
        <ul>
          <li id="signup-link"><Link onClick={this.handleClick("signup")} >Sign Up</Link></li>
          <li id="signin-link"><Link onClick={this.handleClick("login")} >Sign In</Link></li>
        </ul>
      </div>
    );
  }


  userGreeting() {

    return(
      <div className="greet">
        <ul>
          <li className="name">Hi, {this.props.currentUser.first_name} </li>
          <li><button onClick={this.props.logout}>Log Out</button> </li>
        </ul>
      </div>
    );
  }

  render() {
    let message = this.props.currentUser ? this.userGreeting() : this.sessionLinks();

    return(
      <div>
        {message}
        <Modal
                 className="auth-modal"
                 isOpen={this.state.modalOpen}
                 onRequestClose={this.onModalClose}
                 style={ModalStyle}>
            <button id="x" onClick={this.onModalClose}>x</button>
          <SessionFormContainer formType={this.state.formType} />
        </Modal>
      </div>
    );
  }


}

export default Greeting;
