import React from 'react';
import UserProfileBlock from './user_profile_component';
import ProgressBlock from './progress_block';

class CampaignOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contribution: {amount: 0,
      user_id:this.props.user.id,
      campaign_id: this.props.campaign.id},
      isOpen: false
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleButtonType(buttonType) {
    if (this.state.isOpen) {
      return(
        <div className="contribute">
          <button className="backit">Check Out</button>
          <input className="contribution"
                 value="$0"
                 onChange={this.update("amount")}/>
        </div>
      );
    } else {
      return(
        <div className="contribute">
          <button className="backit">Check Out</button>
          <input className="contribution"
                 value="$0"
                 onChange={this.update("amount")}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="campaign-overview">
        <div className="photo">
          <img className="show-img" src={this.props.campaign.image_url} name={this.props.campaign.title}/>
        </div>

        <div className="campaign-basics">
          <h1>{this.props.campaign.title}</h1>
          <h2>{this.props.campaign.tagline}</h2>
          <div className="user-profile">
            <UserProfileBlock getUser={this.props.getUser} userId={this.props.campaign.user_id}/>
          </div>

          <div className="progress-bar">
            <ProgressBlock campaign={this.props.campaign} makeContribution={this.props.makeContribution}/>
          </div>
          {this.handleButtonType(this.state.isOpen)}
        </div>
      </div>
    );
  }
}


export default CampaignOverview;
