import React from 'react';
import  {Link, hashHistory, withRouter} from 'react-router';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentWillReceiveProps(newProps) {
    debugger
    this.props.fetchPost(newProps.params.id);
  }

  render() {
    debugger
    return(
      <div className="campaign-show">
        <h1>This is the campaign show </h1>
      </div>
    );
  }

}

export default withRouter(CampaignShow);
