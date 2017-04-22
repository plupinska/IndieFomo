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
    debugger
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

  componentWillReceiveProps(newProps) {
    debugger
    if (newProps.currentUser !== this.props.currentUser) {
      debugger
      this.setState({currentUser: newProps.currentUser});
    }
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

          <div className="name">Hi, {this.props.currentUser.first_name} </div>
            <ul className="drop-down">
            <br/>
              <li><Link to={`/users/${this.props.currentUser.id}`}>Profile</Link></li>
            <br/>
              <li><button onClick={this.props.logout}>Log Out</button> </li>
            </ul>
      </div>
    );
  }

  render() {
    // Object.keys(this.props.currentUser).length === 0 && obj.constructor === Object
    let message = this.props.loggedIn ? this.userGreeting() : this.sessionLinks();
    debugger
    return(
      <div>
        {message}
        <Modal
                contentLabel="Modal"
                 className="auth-modal"
                 isOpen={this.state.modalOpen}
                 onRequestClose={this.onModalClose}
                 style={ModalStyle}>
            <button id="x" onClick={this.onModalClose}>x</button>
          <SessionFormContainer modalClose={this.onModalClose} formType={this.state.formType} />
        </Modal>
      </div>
    );
  }


}

export default Greeting;
