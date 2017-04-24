import React from 'react';
import UserProfileBlock from './user_profile_component';
import ProgressBlock from './progress_block';

class CampaignOverview extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  // componentWillMount() {
  //   this.props.fetchCampaign(this.props.campaignId);
  // }


  render() {
    debugger
    return (
      <div className="campaign-overview">
        <div className="photo">
          {this.props.campaign.image_url}
        </div>

        <div className="campaign-basics">
          <h1>{this.props.campaign.title}</h1>
          <h2>{this.props.campaign.tagline}</h2>
          <div className="user-profile">
            <UserProfileBlock fetchUser={this.props.fetchUser} owner={this.props.ownerId} />
          </div>

          <div className="progress-bar">
            <ProgressBlock camp={this.props.campaign}/>
          </div>

          <div>
            <button>Back It</button>
          </div>
        </div>
      </div>
    );
  }

}

export default CampaignOverview;
