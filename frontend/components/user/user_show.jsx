import React from 'react';
import { Link, withRouter } from 'react-router';
import UserProfile from './profile';
import UserCampaignList from './campaigns';
import UserContributions from './contributions';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      show: "profile"
    };

    this.handleClick = this.handleClick.bind(this);
    this.properContent = this.properContent.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }

    handleClick(e) {

      switch (e.target.className) {
        case "user-nav-location loc-profile":
          return this.setState({show: "profile"});
        case "user-nav-location loc-campaigns":
          return this.setState({show: "campaigns"});
        case "user-nav-location loc-contributions":
          return this.setState({show: "contributions"});
        default:
          break;
      }
    }


  properContent() {
    switch (this.state.show) {
      case "profile":
        return(
          <UserProfile user={this.props.user}
            editUser={this.props.editUser}/>
        );
      case "campaigns":
        return(
          <UserCampaignList user={this.props.user}
            campaigns={this.props.campaigns}/>
        );
      case "contributions":
        return(
          <UserContributions contributions={this.props.contributions}/>
        );
      default:
        return(
          <UserProfile user={this.props.user}
            campaigns={this.props.campaigns}
            contributions={this.props.contributions}/>
        );
    }
  }

  render() {
    const name = this.props.user ? this.props.user.first_name : "";
    const type = this.state.show;
    const content = this.properContent();

    if (this.props.user.id) {
      return(
        <div className="profile-page">
        <div className="top-divider"> </div>

            <div className="user-profile-nav">
              <div className="user-nav-location loc-profile" onClick={this.handleClick}>
                Profile
              </div>
              <div className="user-nav-location loc-campaigns" onClick={this.handleClick}>
                Campaigns: {this.props.campaigns.count}
              </div>
              <div className="user-nav-location loc-contributions" onClick={this.handleClick}>
                Contributions: {this.props.contributions.count}
              </div>
            </div>

          <div className="profile-greeting">
            <h1>Hi, {name}</h1>
          </div>

          <div className="profile-content-container">
            {content}
          </div>
        </div>
      );
    } else {
      return (
        <h1></h1>
      );
    }
  }
}



export default withRouter(UserShow);
