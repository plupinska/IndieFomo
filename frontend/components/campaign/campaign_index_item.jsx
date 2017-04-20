import React from 'react';
import {Link, hashHistory, withRouter} from 'react-modal';

class CampaignIndexItem extends React.Component {

  constructor(props) {
     
    super(props);
  }

  render() {
    return(
      <div>
        <h1> This is a campaign </h1>
      </div>
    );
  }

}

export default withRouter(CampaignIndexItem);
