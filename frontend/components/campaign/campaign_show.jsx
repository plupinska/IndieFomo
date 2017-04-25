import React from 'react';
import  { withRouter } from 'react-router';
import CampaignOverview from './campaign_overview_component';

class CampaignShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      campaign: null
    }
  }

  componentWillMount() {

    this.props.fetchCampaign(this.props.campaignId).then(camp => {
        
      this.setState({campaign: camp.campaign})
    });
  }

  render() {

    if (this.state.campaign) {
      return(
        <div className="overview-tile">
          <h1>This is the campaign show </h1>
            <CampaignOverview
            fetchCampaign={this.state.fetchCampaign}
            campaign={this.state.campaign} />
        </div>
      );
    } else {
      return (
        <h1> Waiting.. </h1>
      )
    }
  }
}
export default withRouter(CampaignShow);
