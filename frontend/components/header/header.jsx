import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../../app/assets/stylesheets/modal_style';
import SessionFormContainer from '../session/session_form_container';

class Header extends React.Component {
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
      if (str === "loginguest") {
        this.props.loginguest();
      } else {
        this.setState({ modalOpen: true, formType: str });
      }
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser !== this.props.currentUser) {
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
          <li id="signin-link"><Link onClick={this.handleClick("loginguest")} >Guest</Link></li>
        </ul>
      </div>
    );
  }

  userGreeting() {
    return(
      <div className="greet">
          <Link className="name">Hi, {this.props.currentUser.first_name}</Link>
              <ul className="drop-down">
                <li className="lis"><Link to="campaigns" className="profile-link" >Campaigns</Link></li>
                <li className="lis"><Link className="profile-link" to={`/users/${this.props.currentUser.id}`}>Profile</Link></li>
                <li className="lis"><button className="log-out-button" onClick={this.props.logout}>Log Out</button> </li>
              </ul>
      </div>
    );
  }

  render() {

    let message = this.props.currentUser ? this.userGreeting() : this.sessionLinks();

    return(
      <div className="header">
        <div className="header-left">
          <Link className="logo" to="/">INDIE FOMO</Link>
          <Link>Explore</Link>
          <Link>GitHub Repo</Link>
        </div>

        <div className="header-right">
          <div className="search">Search </div>
          <div className="createCampaign">
            <Link to="campaign/new">CREATE A CAMPAIGN</Link>
          </div>
          <div className="session-links">
            {message}
          </div>
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
      </div>
    );
  }


}

export default Header;
