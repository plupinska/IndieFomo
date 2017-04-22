import React from 'react';
import  { withRouter } from 'react-router';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(newProps) {
    this.props.fetchPost(newProps.params.id);
  }

  render() {

    return(
      <div className="campaign-show">
        <h1>This is the campaign show </h1>
      </div>
    );
  }

}

export default withRouter(CampaignShow);
