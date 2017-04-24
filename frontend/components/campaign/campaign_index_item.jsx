import React from 'react';
import { withRouter } from 'react-router';

class CampaignIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const url = `/campaigns/${this.props.campaign.id}`;
    this.props.router.push(url);
  }

  render() {
    return(
      <div className="campaign-tile" onClick={this.handleClick}>
        <img src={this.props.campaign.image_url}
            alt={this.props.campaign.title} />
        <div className="description">
          <div className="text">{this.props.campaign.title}</div>
          <div className="text">{this.props.campaign.tagline}</div>
          <div className="text">{this.props.campaign.target_amount}</div>
        </div>
      </div>
    );
  }

}

export default withRouter(CampaignIndexItem);
