import React from 'react';
import { connect } from 'react-redux';
import Reward from './reward';
import {removeReward} from '../../../actions/reward_actions';
import {makeContribution} from '../../../actions/contribution_actions';

class RewardsShowPage extends React.Component {
  constructor(props) {
    super(props);
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

        return(
        <Reward key={idx} reward={rew} onShow={this.props.onShow} campaignId={this.props.campaignId}
          makeContribution={this.props.makeContribution} user={this.props.user} deleteReward={this.props.removeReward}/>
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

const mapStateToProps = (state, ownProps) => {

    let campid = null;
    if (ownProps.params) {
      campid = ownProps.campaignId;
    } else {
      campid = state.campaigns.campaign.id;
    }
    let rews = [];
  if (Object.keys(state.rewards).length > 0) {
      rews = Object.keys(state.rewards).map((key) => state.rewards[key]);
    }

    let showbool = ownProps.onShow;

  return {
    rewards: rews,
    campaignId: parseInt(campid),
    user: state.session.currentUser,
    onShow:  showbool
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    removeReward: (reward) => dispatch(removeReward(reward)),
    makeContribution: (contribution) => dispatch(makeContribution(contribution))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RewardsShowPage);
