import React from 'react';
import { connect } from 'react-redux';
import { getAllRewards } from '../../../actions/reward_actions';

class RewardsShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      hover: false,
    };
    this.contribute = this.contribute.bind(this);
  }

  onOver() {
    this.setState({hover: true});
  }

  onOut() {
    this.setState({hover: false});
  }

  contribute(price) {
    this.props.makeContribution();
  }

  render() {
    let rewardTiles = null;

    let theseRewards = [];
    let campId = parseInt(this.props.campaignId);
    this.props.rewards.forEach((reward) => {
      if (reward.campaign_id === campId) {
        theseRewards.push(reward);
      }
    });

    rewardTiles= theseRewards.map((rew, idx) => {
      if (this.props.onShow) {
        return(
          <div className="rewards-item" key={idx} onMouseOver={this.showButton}>
            <div className="rewards-details">
            <div className="rewards-price">${rew.price} <span>USD</span></div>
              <div className="reward--title">{rew.title}</div>
              <div className="rewards-description">{rew.description}</div>
            </div>
          </div>
      );
    }});


    if (this.props.rewards.length > 0 ) {

      return(
        <div className="rewards-show-page">
          { rewardTiles }
        </div>
      );
    } else {
      return(
        <div>
        </div>
      );
    }
  }
}


export default RewardsShowPage;
