import React from 'react';
import { connect } from 'react-redux';

class ProgressBlock extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps() {
    if (this.props.campaign.num_contributions !== this.props.campaign.num_contributions) {
    }
  }

  render() {

    const num_backers = this.props.campaign.num_contributions;
    let percentage = Math.round((this.props.campaign.total_contributions / this.props.campaign.target_amount)*100) || 0;
    return (
      <div className="progress-bar">
        <div className="funds-1">
          <span className="dollars">${this.props.campaign.total_contributions}</span> USD raised by {this.props.campaign.num_contributions} backers
        </div>

        <div className="bar">
          <div className="percentage" style={{width: `${percentage}%`}}></div>
        </div>

        <div className="funds-2">
          {percentage}% of ${this.props.campaign.target_amount} goal
        </div>
        <div className="moment">12 Days left</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    campaign: state.campaigns.campaign,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProgressBlock);
