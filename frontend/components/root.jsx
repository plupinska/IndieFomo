import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import CampaignIndexContainer from './campaign/campaign_index_container';
import CampaignIndexItem from './campaign/campaign_index_item';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }/>
        <Route path="/campaigns" component={CampaignIndexContainer} >
          <Route path="/campaigns/:id" component={CampaignIndexItem}/>
        </Route>
      </Router>
    </Provider>
  );
};


  //
  // <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
  // <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
export default Root;
