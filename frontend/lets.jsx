import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import * as SessionApi from './util/session_api_util';
import * as SessionAct from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING END


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});


//TESTING START
window.SessionApi = SessionApi;
window.SessionAct = SessionAct;
//TESTING END
