import React from 'react';
import {Link} from 'react-router';
class UserContributions extends React.Component {
  constructor(props) {
    super(props);
  }

  makeTile() {
    return this.props.contributions.map((contribution, idx) => {

      let reward;
      if (contribution.reward) {
        reward = contribution.reward;
      } else {
        reward = "No reward for this one :(";
      }
      return(
        <div className="user-reward-item" key={idx}>
          <div className="table-row">Date</div>
          <div className="table-row link-to"><Link className="link-nav" to={`/campaigns/${contribution.campaign_id}`}>{contribution.campaign_title}</Link></div>
          <div className="table-row">{contribution.amount}</div>
          <div className="table-row">{reward}</div>
        </div>
      );
    });
  }

  render() {
    const contributions = this.makeTile();

    return(
      <div className="user-contribution-tile">
        <div className="table-names">
          <div className="table-col">Date</div>
          <div className="table-col">Campaign</div>
          <div className="table-col">Amount</div>
          <div className="table-col">Reward</div>
        </div>

        <div className="contribution-items">
        {contributions}
        </div>
      </div>
    );
  }
}

export default UserContributions;
