import React from 'react';
import { Link, withRouter } from 'react-router';

class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.props.fetchCampaigns();
  }

  render() {
    debugger 
    const AllCampaigns = this.props.campaigns.map((campaign) => {
      <li key={campaign.id}>
      <CampaignIndexItem campaign={campaign} fetchCampaign={this.props.fetchCampaign}/>
      </li>
    });


    return(
      <div>
        {AllCampaigns}
      </div>
    );
  }
}

export default withRouter(CampaignIndex);
