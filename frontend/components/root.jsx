import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import CampaignIndexContainer from './campaign/campaign_index_container';
import CampaignShowContainer from './campaign/campaign_show_container';
import UserShowContainer from './user/user_container';
import HomePage from './home_page/home_page';
import NewCampaignContainer from './campaign/new_campaign_container';
import EditCampaignComponent from './campaign/edit_campaign_container';



const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;

    const url = location.hash.split('/');
    const userId = url[2];
    if (currentUser && currentUser.id !== parseInt(userId)) {
      replace('/');
    }
  };

  const redirect = (nextState, replace) => {
    replace('/');
  };


  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={HomePage}/>
          <Route path="/campaigns" component={CampaignIndexContainer}/>
          <Route path="/campaign/:id/edit" component={EditCampaignComponent}/>
          <Route path="/campaigns/:id" component={CampaignShowContainer} />
          <Route path="/users/:id" component={UserShowContainer} onEnter={_redirectUnlessLoggedIn}/>
          <Route path="/campaign/new" component={NewCampaignContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
