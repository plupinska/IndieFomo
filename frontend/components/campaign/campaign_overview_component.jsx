import React from 'react';
import UserProfileBlock from './user_profile_component';
import ProgressBlock from './progress_block';

class CampaignOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      user_id: null,
      campaign_id: this.props.campaignId,
      isOpen: false,
      errors: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillMount() {
    this.setState({
      errors: ""
    });
  }

  componentWillUnmount() {

    this.setState({
      errors: ""
    });
  }

  componentWillReceiveProps(newProps) {

    if (this.props.campaignId === newProps.campaignId) {
      this.setState({
        errors: newProps.contributionErrors
      });
    }
  }

  toggleOpen() {
    this.setState({isOpen : !this.state.isOpen});
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

  handleClick() {
    let date = this.getThisDate();

    this.props.makeContribution({amount: this.state.amount, user_id: this.props.currentUser.id,
      campaign_id: this.state.campaign_id, date: date})
      this.setState({
        amount: 0
      });
    this.toggleOpen();
  }

  handleButtonType() {
    if (this.props.currentUser) {
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

  getErrors() {

    return(
      <div className="contribution-errors">
        {this.state.errors}
      </div>
    );
  }

  render() {
    let errors = this.getErrors();
    debugger
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

            {errors}

          </div>
        </div>
      </div>
    );
  }
}


export default CampaignOverview;
