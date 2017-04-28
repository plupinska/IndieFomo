import React from 'react';
import  { withRouter } from 'react-router';
import CampaignOverview from './campaign_overview_component';
import RewardsShowPage from './rewards/rewards_showpage';

class CampaignShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCampaign(this.props.campaignId)
    this.props.getAllRewards(this.props.campaignId)
  }

  render() {

    if (this.props.campaign) {
      return(
        <div className="campaign-show">
          <div className="overview-tile">
              <CampaignOverview
              fetchCampaign={this.props.fetchCampaign}
              getUser={this.props.getUser}
              campaign={this.props.campaign}
              campaignId={this.props.campaignId}
              user={this.props.user}
              makeContribution={this.props.makeContribution} />
          </div>

          <div  className="more-details">
            <div className="show-description">
              {this.props.campaign.descriptions}
            </div>

            <div className="rewards">
              <RewardsShowPage rewards={this.props.rewards} campaignId={this.props.campaign.id}/>
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
