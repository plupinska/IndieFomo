import React from 'react';

class Reward extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.contribute = this.contribute.bind(this);
    this.handleButtonType = this.handleButtonType.bind(this);
    this.deleteReward = this.deleteReward.bind(this);
    this.onhoverIn = this.onhoverIn.bind(this);
    this.onhoverOut = this.onhoverOut.bind(this);
  }

  onhoverIn() {
    this.setState({hover: true});
  }

  onhoverOut() {
    this.setState({hover: false});
  }

  deleteReward() {
    this.props.deleteReward({campaign_id: this.props.campaignId, reward_id: this.props.reward.id})
  }

  handleButtonType() {
    if (this.state.hover) {
      return(
        <button className="get-it" onClick={this.contribute}>GET THIS PERK</button>
      );
    } else {
      return(
        <div className="eta">ESTIMATED June 2018</div>
      );
    }
  }
  contribute() {

    this.props.makeContribution({user_id: this.props.user.id, reward_id: this.props.reward.id,
      amount: this.props.reward.amount, campaign_id: this.props.campaignId})
  }


  render() {
     
    if (this.props.onShow) {
      return(
        <div className="reward-show" onMouseOver={this.onhoverIn} onMouseOut={this.onhoverOut}>
          <ul>
            <li className="reward-prices">${this.props.reward.price}</li>
            <li className="reward-titles">{this.props.reward.title}</li>
            <li className="reward-descriptions">{this.props.reward.description}</li>
          </ul>
          <div className="time-left">
            {this.handleButtonType()}
          </div>
        </div>
      );
    } else {
      return(
        <div className="reward">
          <ul>
            <li className="reward-prices">${this.props.reward.price}</li>
            <li className="reward-titles">{this.props.reward.title}</li>
            <li className="reward-descriptions">{this.props.reward.description}</li>
          </ul>
          <button className="delete" onClick={this.deleteReward}>Delete</button>
        </div>
      );
    }

  }
}

export default Reward;
