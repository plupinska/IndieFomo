import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import CampaignIndexContainer from './campaign/campaign_index_container';
import CampaignShowContainer from './campaign/campaign_show_container';
import UserShowContainer from './user/user_container';

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
        <Route path="/" component={ App }>
          <Route path="/campaigns" component={CampaignIndexContainer}/>
          <Route path="/campaigns/:id" component={CampaignShowContainer}/>
          <Route path="/users/:id" component={UserShowContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};


  //
  // <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
  // <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
export default Root;
