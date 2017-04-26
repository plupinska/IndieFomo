import React from 'react';
import moment from 'moment';

class ProgressBlock extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div className="progress-bar">
        <div className="funds-1">
          <span className="dollars">${this.props.campaign.total_contributions}</span> USD raised by {this.props.campaign.num_contributions} backers
        </div>

        <div className="bar">.</div>

        <div className="funds-2">
          {(this.props.campaign.total_contributions / this.props.campaign.target_amount)*100}% of ${this.props.campaign.target_amount} goal
        </div>
        <div className="moment">Figure out moment</div>
      </div>
    );
  }
}

export default ProgressBlock;
