import React from 'react';

class Reward extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      madeContribution: false
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
    this.props.deleteReward({campaign_id: this.props.campaignId, id: this.props.reward.id})
  }

  handleButtonType() {
    if (this.state.madeContribution) {
      return(
        <div className="contribute-thanks" onClick={this.contribute}>THANK YOU FOR CONTRIBUTING!</div>
      );
    }
    else if (this.state.hover && this.props.user.id) {
      return(
        <div className="get-it" onClick={this.contribute}>GET THIS PERK</div>
      );
    } else {
      return(
        <div className="eta">ESTIMATED June 2018</div>
      );
    }
  }

  getThisDate() {
    let monthHash = {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May',
                    6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sept', 10: 'Oct', 11: 'Nov', 12: 'Dec'};
    let today = new Date();
    let day = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }
    mm = parseInt(mm);
    mm = monthHash[mm];

     today = mm + ' ' + day + ' ' + yy;
     return today;
  }

  contribute() {
    let date = this.getThisDate();
    
    this.props.makeContribution({user_id: this.props.user.id, reward_id: this.props.reward.id,
      amount: this.props.reward.price, campaign_id: this.props.campaignId, date: date }).then((contribution) => {
        this.setState({madeContribution: true});
      });
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
