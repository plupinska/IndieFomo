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

  const percentage = Math.round((this.props.campaign.total_contributions / this.props.campaign.target_amount)*100);

    return(
      <div className="campaign-tile" onClick={this.handleClick}>
        <img src={this.props.campaign.image_url}
            alt={this.props.campaign.title} />

        <div className="description-container">
          <div className="description-index">
            <div className="text">{this.props.campaign.title}</div>
            <div className="tagline-text">{this.props.campaign.tagline}</div>
          </div>

          <div className="progress-tile-bar">
            <div className="funds-tile">
              <span className="dollars-tile">${this.props.campaign.total_contributions}</span> USD raised by {this.props.campaign.num_contributions} backers
            </div>

            <div className="bar-tile">
              <div className="percentage-tile" style={{width: `${percentage}%`}}></div>
            </div>

            <div className="funds-tile">
              {percentage}% of ${this.props.campaign.target_amount} goal
            </div>
            <div className="moment-tile">30 days left</div>
          </div>
        </div>

      </div>
    );
  }

}

export default withRouter(CampaignIndexItem);
