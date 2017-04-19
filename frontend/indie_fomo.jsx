import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, signIn, signOut} from './util/auth_api_util';
import configureStore from './store/store';
import Root from './components/root';

window.signUp = signUp;
window.signIn = signIn;
window.signOut = signOut;
window.store = configureStore;
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
