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
    this.handleChange = this.handleChange.bind(this);
    this.returnSearchResults = this.returnSearchResults.bind(this);
    this.clearResults = this.clearResults.bind(this);
    this.setExploreDropDown = this.setExploreDropDown.bind(this);
    this.unsetExploreDropDown = this.unsetExploreDropDown.bind(this);

    this.state = {modalOpen: false,
                  currentUser: this.props.currentUser,
                  formType: "",
                  searchQuery: "",
                  searchResults: [],
                  searchActive: false,
                  exploreDropDown: false,
                  categories: []
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

  componentWillMount() {
    this.props.getCategories().then((cats) => {
      this.setState({
        categories: cats
      });
    });
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

  handleChange(e) {

    let searchquery = e.currentTarget.value;
    this.setState({
      searchQuery: searchquery,
      searchActive: true
    });

    this.props.searchCampaigns(searchquery).then((camps) => {
      this.setState({searchResults: camps.campaigns});
    });
  }

  returnSearchResults() {
    let results = null;
    if (this.state.searchResults.length > 0) {
      results = this.state.searchResults.map((result, idx) => {
          return (<Link className="s-result" key={idx} to={`campaigns/${result.id}`}>{result.title}</Link>);
      });
    } else {
      return;
    }

    return results;
  }

  clearResults() {
    this.setState({
      searchQuery: "",
      searchResults: [],
      searchActive: false
    });
  }

  setExploreDropDown() {

    this.setState({
      exploreDropDown: true
    });
  }

  unsetExploreDropDown() {

    this.setState({
      exploreDropDown: false
    });
  }

  getExploreLinks() {
    let cats;
    cats = this.state.categories.categories.map((cat, idx) => {
      return(
        <Link className="cat-nav" key={idx} to={`categories/cat.id`} onMouseOver={this.setExploreDropDown}>{cat.cat}</Link>
      );
    });

    return cats;
  }


  render() {
    let message = this.props.currentUser ? this.userGreeting() : this.sessionLinks();
    let results = null;
    if (this.state.searchActive) {
      results = this.returnSearchResults();
    }
    // let showExplore = null;
    // if (this.state.exploreDropDown) {
    //    showExplore = this.getExploreLinks();
    // }

    return(
      <div className="header">
        <div className="header-left">
          <Link className="logo" to="/">INDIE FOMO</Link>
          <div className="explore-dropdown">
            <div className="explore-dropdown">

            </div>
          </div>
           <a href="https://github.com/plupinska" target="_blank" className="t-link-container">Github</a>
        </div>

        <div className="header-right">
          <div className="search">
            <input type="text" value={this.state.searchQuery} placeholder="Search.." onChange={this.handleChange}/>
              <div className={`searchResults-${this.state.searchActive}`} onClick={this.clearResults}>{results}</div>
           </div>
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
