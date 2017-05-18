import React from 'react';
import  { withRouter } from 'react-router';
import CampaignOverview from './campaign_overview_component';
import RewardsShowPage from './rewards/rewards_showpage';

class CampaignShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCampaign(this.props.campaignId);
    this.props.getAllRewards(this.props.campaignId);
  }

  componentWillReceiveProps(newProps) {

    if (this.props.campaignId !== newProps.params.id) {
      this.props.fetchCampaign(newProps.params.id);
      this.props.getAllRewards(newProps.params.id);
    }
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
              user={this.props.campaign.user_id}
              currentUser={this.props.currentUser}
              makeContribution={this.props.makeContribution}
              contributionErrors={this.props.contributionErrors}
              />
          </div>

          <div  className="more-details">
            <div className="show-description">
              <h1>Overview</h1>
              {this.props.campaign.descriptions}
            </div>

            <div className="rewards">
              <h1>Rewards</h1>
              <RewardsShowPage rewards={this.props.rewards} campaignId={this.props.campaign.id}
                onShow={true}/>
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
