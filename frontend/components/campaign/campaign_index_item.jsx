import React from 'react';
import {Link, hashHistory, withRouter} from 'react-router';

class CampaignIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="campaign-tile">
        <img src="./Images/coachella.png" alt={this.props.campaign.title}/>
        <div className="description">
          <div className="text">{this.props.campaign.title}</div>
          <div className="text">{this.props.campaign.tagline}</div>
          <div className="text">{this.props.campaign.target_amount}</div>
        </div>
      </div>
    );
  }

}

export default withRouter(CampaignIndexItem);
