import React from 'react';
import { connect } from 'react-redux';
import Reward from './reward';

class RewardsShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rewardTiles = null;
    debugger
    let theseRewards = [];
    let campId = parseInt(this.props.campaignId);
    this.props.rewards.forEach((reward) => {
      if (reward.campaign_id === campId) {
        theseRewards.push(reward);
      }
    });

    rewardTiles= theseRewards.map((rew, idx) => {

        return(
        <Reward key={idx} reward={rew} onShow={this.props.onShow} campaignId={this.props.campaignId}
          makeContribution={this.props.makeContribution} user={this.props.user} deleteReward={this.props.deleteReward}/>
      );
    });


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
