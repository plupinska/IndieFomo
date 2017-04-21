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

    const AllCampaigns = this.props.campaigns.map((campaign) => {
      return(
        <li id="item" key={campaign.id}>
          <CampaignIndexItem campaign={campaign} fetchCampaign={this.props.fetchCampaign}/>
        </li>
      );
    });


    return(
      <div className="all-campaigns">
        <h1 className="title">All Campaigns</h1>
        <div className="campaigns">
          {AllCampaigns}
          {AllCampaigns}
          {AllCampaigns}
          {AllCampaigns}
        </div>
      </div>
    );
  }
}

export default withRouter(CampaignIndex);
