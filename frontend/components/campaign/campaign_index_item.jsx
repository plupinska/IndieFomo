import React from 'react';
import {Link, hashHistory, withRouter} from 'react-router';

class CampaignIndexItem extends React.Component {

  constructor(props) {
    debugger
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
