import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import CampaignIndexItem from './campaign_index_item';


class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchCampaigns();
  }

  render() {

    if (this.props.campaigns[0] ) {

      const AllCampaigns = this.props.campaigns.map((campaign) => {
        return(
          <li id="item" key={campaign.id}>
            <CampaignIndexItem key={campaign.id} campaign={campaign}
            fetchCampaign={this.props.fetchCampaign}/>
          </li>
        );
      });

      return(
        <div className="all-campaigns">
          <div className="title-">
            <h1 className="title">All Campaigns</h1>
          </div>
          <div className="campaigns-x">
            {AllCampaigns}
            {AllCampaigns}
          </div>
        </div>
      );
    } else {
      return(
          <h1> Waiting... </h1>
      );
    }

  }
}

export default withRouter(CampaignIndex);
