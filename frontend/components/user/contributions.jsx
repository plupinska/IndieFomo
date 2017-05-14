import React from 'react';
import {Link} from 'react-router';
class UserContributions extends React.Component {
  constructor(props) {
    super(props);
  }

  formatDate(str) {
    let monthHash = {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May',
                    6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sept', 10: 'Oct', 11: 'Nov', 12: 'Dec'};

    let date = str;
    if (str.includes('-')) {
      date = str.split('-');
      let yy = date[0];
      let dd = date[2];
      let month = parseInt(date[1]);
      month = monthHash[month];

      date = month + ' ' + dd + ' ' + yy;
    }

    return date;
  }

  makeTile() {

    return this.props.contributions.map((contribution, idx) => {
      let date = this.formatDate(contribution.date);
      let reward;

      if (contribution.reward_id) {
        reward = contribution.reward.title;
      } else {
        reward = "No reward for this one :(";
      }
      return(
        <div className="user-reward-item" key={idx}>
          <div className="table-row">{date}</div>
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
