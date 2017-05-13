import React from 'react';
import {Link} from 'react-router';
class UserCampaignList extends React.Component {

  constructor(props) {
    super(props);

  }

  makeTile() {

    return this.props.campaigns.map((camp, idx) => {

      return(
        <div className="user-campaign-item" key={idx}>
          <Link className="link-nav" to={`campaigns/${camp.id}`}>
            <img className="list-img" src={camp.image_url}/>
          </Link>
          <div className="user-campaign-item-details" >
            <div className="usr-camp-title" >
              <span className="UCTitle">Campaign Title:</span> {camp.title}
            </div>
            <div className="author-info" >

            </div>
            <div className="stats-u">
                <div className="stats-1"><span className="stats-span">Total Contributions:</span> {camp.total_contributions}</div>
                <div className="stats-2"><span className="stats-span">% of Target:</span> {Math.floor((camp.total_contributions/camp.target_amount) * 100)}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const tiles = this.makeTile();
    return(
      <div className="usr-campaign-list">
        {tiles}
      </div>
    );
  }

}

export default UserCampaignList;
