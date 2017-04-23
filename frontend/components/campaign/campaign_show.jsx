import React from 'react';
import  { withRouter } from 'react-router';
import CampaignOverview from './campaign_overview_component';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
      
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.props.fetchCampaign(newProps.params.id);
    }
  }

  componentWillMount() {
      
    this.props.fetchCampaign(this.props.params.id);
  }

  render() {
      
    return(
      <div className="campaign-show">
        <h1>This is the campaign show </h1>

      </div>
    );
  }

}
  // <CampaignOverview campaign={this.props.campaign}/>
export default withRouter(CampaignShow);
