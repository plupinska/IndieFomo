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
        <li key={campaign.id}>
          <CampaignIndexItem campaign={campaign} fetchCampaign={this.props.fetchCampaign}/>
        </li>
      );
    });


    return(
      <div>
        {AllCampaigns}
      </div>
    );
  }
}

export default withRouter(CampaignIndex);
