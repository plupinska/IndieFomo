import { connect } from 'react-redux';
import { makeContribution } from '../../../actions/contribution_actions';
import { createReward, getReward, getAllRewards, deleteReward } from '../../../actions/reward_actions';
import React from 'react';
import RewardsShowPage from './rewards_showpage';
import {selectRewards} from '../../../reducers/selectors';

class NewReward extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      campaign_id: null,
        title: "Give it a title...",
        description: "Tell your contributors about your reward..",
        price: 0
    };

    const newState = Object.assign({}, this.state);
    this.isChanged = this.isChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    debugger
  }

  componentWillMount() {
    debugger
    this.props.getAllRewards(this.props.campaignId);
    this.setState({
      campaign_id: this.props.campaignId,
      title: "Give it a title...",
      description: "Tell your contributors about your reward..",
      price: 0,
    });

  }

  // componentWillReceiveProps() {
  //   this.setState({
  //       campaign_id: this.props.campaignId,
  //       title: "Give it a title...",
  //       description: "Tell your contributors about your reward..",
  //       price: 0,
  //   });
  // }


  handleSubmit(e) {
    debugger
    e.preventDefault();
    if (this.isChanged(this.state)) {
      this.props.createReward(this.state);
    }
  }

  isChanged(newState) {
    // make change -1 to account for the campaign id always being the same
    let change = -1;

    Object.keys(this.state).forEach((key) => {
      if (newState[key] !== this.state.key) {
        change += 1;
      }
    });
    debugger
    let changed = change > 0 ? true : false;
    return changed
  }

  handleClick(e) {

    e.preventDefault();

    const url = `campaigns/${this.props.campaignId}`;
    this.props.router.push(url);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    debugger
      return(
        <div className="create-reward">
          <div className="reward--">
            <h1>Create a reward!</h1>
            <h2>Can't crowdsource without incentives...</h2>
          </div>
          <main>
            <div className="reward-form">
              <form className="r-form">

              <div className="reward-title">
                <h2>Give your reward a title</h2>
                <input type="text"
                  placeholder={this.state.title}
                  onChange={this.update("title")}>
                </input>
              </div>

              <div className="reward-description">
                <h2>Give your reward a description</h2>
                <input type="text"
                  placeholder={this.state.description}
                  onChange={this.update("description")}>
                </input>
              </div>

              <div className="reward-price">
                <h2> How much does it cost? </h2>
                <input type="text"
                  placeholder={this.state.target_amount}
                  onChange={this.update("price")}>
                </input> <span>USD</span>
               </div>

             <div className="submit-buttons" onClick={this.handleSubmit}>
               <input type="submit"
                       value="ADD REWARD">
               </input>
               <br/>
               <br/>
               <input type="submit"
                       value="SUBMIT" onClick={this.handleClick}>
               </input>
             </div>
              </form>
            </div>
            <div className='rewards-show'>
              <RewardsShowPage rewards={this.props.rewards} campaignId={this.props.campaignId}
                onShow={false} makeContribution={this.props.makeContribution}
                  user={this.props.user} deleteReward={this.props.deleteReward}/>
            </div>
          </main>
        </div>
      );
  }

}


const mapStateToProps = (state, ownProps) => {

  let campid = null;
  if (ownProps.params) {
    campid = ownProps.params.id ;
  } else {
    campid = state.campaigns.campaign.id;
  }

  let rews = [];
  if (Object.keys(state.rewards).length > 0) {
    rews = Object.keys(state.rewards).map((key) => state.rewards[key]);
  }
  debugger
  return {
    campaignId: parseInt(campid),
    user: state.session.currentUser,
    rewards: rews
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createReward: (id) => dispatch(createReward(id)),
    getReward: (id) => dispatch(getReward(id)),
    getAllRewards: (contribution) => dispatch(getAllRewards(contribution)),
    makeContribution: (contribution) => dispatch(makeContribution(contribution)),
    deleteReward: (reward) => dispatch(deleteReward(reward))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReward);
