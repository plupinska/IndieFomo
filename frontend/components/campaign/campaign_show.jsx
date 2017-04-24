import React from 'react';
import  { withRouter } from 'react-router';
import CampaignOverview from './campaign_overview_component';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      debugger
      this.props.fetchCampaign(newProps.params.id);
    }
  }

  componentWillMount() {
    debugger
    this.props.fetchCampaign(this.props.params.id);
  }

  render() {
    debugger
    return(
      <div className="campaign-show">
        <h1>This is the campaign show </h1>
          <CampaignOverview fetchCampaign={this.props.fetchCampaign} ownerid={this.props.ownerId} campaign={this.props.campaign}/>
      </div>
    );
  }
}
export default withRouter(CampaignShow);
