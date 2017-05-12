import React from 'react';


class UserNav extends React.Component{
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div className="user-profile-nav">
        <div  className="user-nav-location">
          Profile
        </div>
        <div className="user-nav-location">
          Campaigns: {this.props.campaigns.count}
        </div>
        <div className="user-nav-location">
          Contributions: {this.props.contributions.count}
        </div>
      </div>
    );
  }
}

export default UserNav;
