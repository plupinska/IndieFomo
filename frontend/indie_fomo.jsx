import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, signIn, signOut} from './util/auth_api_util';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {

    const preloadedState = {session: {currentUser: window.currentUser, errors: {}}};

    store = configureStore(preloadedState);
  } else {

    store = configureStore();
  }

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
