import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import * as SessionApi from './util/session_api_util';
import * as SessionAct from './actions/session_actions';
import * as SpotApi from './util/spot_api_util';
import * as SpotAct from './actions/spot_actions';
import * as ModalApi from './util/modal_util';
import * as ModalAct from './actions/modal_actions';
import * as FilterAct from './actions/filter_actions';
import * as BookingAct from './actions/booking_actions';
import * as BookingApi from './util/booking_api_util';

import merge from 'lodash/merge';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

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
window.SpotApi = SpotApi;
window.SpotAct = SpotAct;
window.ModalApi = ModalApi;
window.ModalAct = ModalAct;
window.FilterAct = FilterAct;
window.BookingAct = BookingAct;
window.BookingApi = BookingApi;
window.merge = merge;
//TESTING END
