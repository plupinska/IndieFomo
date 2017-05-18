import React from 'react';
import { Link, withRouter } from 'react-router';


class NewCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      title: null,
      target_amount: 0,
      descriptions: "",
      errors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newCamp = this.state;
      delete newCamp["errors"];

    return this.props.createCampaign(newCamp)
      .then((camp) => this.success(camp),
      (err) => this.fail(err));
  }

  success(camp) {

    const url = `campaign/${camp.campaign.id}/edit`;
    this.props.router.push(url);
  }

  fail(err) {

    this.setState({errors: err});
  }

  componentWillMount() {
    if (!this.props.user) {
      this.props.router.push('/');
    } else {
      this.setState({user_id: this.props.user.id});
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  getErrors() {

    if (this.props.errors.includes("Target") && this.props.errors.includes("Title")) {
      return (
        <div className="new-campaign-errors">
          <div>Please enter a valid Amount and Title!</div>
        </div>
      );
    } else if (this.props.errors.includes("Title")) {
      return (
        <div className="new-campaign-errors">
          <div>Please enter a valid Title!</div>
        </div>
      );
    } else if (this.props.errors.includes("Target")) {
      return (
        <div className="new-campaign-errors">
          <div>Please enter a valid Amount!</div>
        </div>
      );
    }

  }

  render() {
    let  errs = null;

    if (this.props.errors) {
      errs = this.getErrors();
    }

      return(
        <div className="create-campaign">
          <h1>Start a Campaign</h1>
          <h2>Crowdfund your Fomo</h2>

          <div className="campaign-form">
            <form className="c-form"  onSubmit={this.handleSubmit}>
              <div>

              </div>
              <div className="target-amount">
                <h2> How much would you like to raise? </h2>
                <input type="text"
                  placeholder={this.state.target_amount}
                  onChange={this.update("target_amount")}>
                </input> <span>USD</span>
               </div>

              <div className="campaign-title">
                <h2>What would you like to call your campaign?</h2>
                <input type="text"
                  placeholder={this.state.title}
                  onChange={this.update("title")}>
                </input>
              </div>

              <div className="submit-button1">
                <input type="submit"
                        value="CREATE MY CAMPAIGN">
                </input>
              </div>
            </form>

            {errs}
          </div>
        </div>
      );
  }
}

export default withRouter(NewCampaign);
