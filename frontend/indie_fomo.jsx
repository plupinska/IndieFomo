import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, signIn, signOut} from './util/auth_api_util';
import configureStore from './store/store';

window.signUp = signUp;
window.signIn = signIn;
window.signOut = signOut;
window.store = configureStore;
document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1> Welcome to Indie Fomo </h1>, root);
});
