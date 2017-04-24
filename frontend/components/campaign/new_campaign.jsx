import React from 'react';
import { Link, withRouter } from 'react-router';


class NewCampaign extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      user_id: this.props.user.id,
      title: "",
      target_amount: 0,
      descriptions: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();
    const newCamp = this.state
    this.props.createCampaign(newCamp).then((camp) => {
      const url = `campaign/${camp.campaign.id}/edit`;

      this.props.router.push(url);
    });
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    if (this.props.user) {
      return(
        <div className="create-campaign">
          <h1>Start a Campaign</h1>
          <h2>Crowdsource your Fomo</h2>

          <div className="campaign-form">
            <form className="c-form"  onSubmit={this.handleSubmit}>
              <div className="target-amount">
                <h2> How much would you like to raise? </h2>
                <input type="text"
                  placeholder={this.state.target_amount}
                  onChange={this.update("target_amount")}>
                </input>
              </div>

              <div className="campaign-title">
                <h2>What would you like to call your campaign?</h2>
                <input type="text"
                  placeholder={this.state.title}
                  onChange={this.update("title")}>
                </input>
              </div>

              <div className="submit-button">
                <input type="submit"
                        value="submit">
                </input>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return(
        <h1> Nothing </h1>
      );
    }

  }
}

export default withRouter(NewCampaign);
