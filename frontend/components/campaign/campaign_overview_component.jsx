import React from 'react';
import UserProfileBlock from './user_profile_component';
import ProgressBlock from './progress_block';

class CampaignOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      user_id: this.props.user,
      campaign_id: this.props.campaignId,
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  toggleOpen() {
    this.setState({isOpen : !this.state.isOpen});
  }

  handleClick() {
    this.props.makeContribution({amount: this.state.amount, user_id: this.state.user_id,
      campaign_id: this.state.campaign_id});
    this.toggleOpen();
  }

  handleButtonType() {
    if (this.props.user) {
      if (this.state.isOpen) {

        return(
          <div className="contribute">
            <button onClick={this.handleClick} className="check-out">Check Out</button>
            <input className="contribution"
                   type="text"
                   placeholder="$0"
                   onChange={this.update("amount")}/>
          </div>
        );
      } else {

        return(
          <div className="contribute">
            <button onClick={this.toggleOpen} className="back-it">Back It</button>
          </div>
        );
      }
    } else {
        return(
            <div></div>
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
          <div className="contribute-button">
            {this.handleButtonType()}
          </div>
        </div>
      </div>
    );
  }
}


export default CampaignOverview;
