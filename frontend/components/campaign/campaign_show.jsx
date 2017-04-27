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
        <div className="campaign-show">
          <div className="overview-tile">
              <CampaignOverview
              fetchCampaign={this.props.fetchCampaign}
              getUser={this.props.getUser}
              campaign={this.state.campaign}
              campaignId={this.props.campaignId}
              user={this.props.user}
              makeContribution={this.props.makeContribution} />
          </div>

          <div  className="more-details">
            <div className="show-description">
              {this.state.campaign.descriptions}
            </div>

            <div className="rewards">
              Rewards will go here
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <h1> Waiting.. </h1>
      );
    }
  }
}
export default withRouter(CampaignShow);
