import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,compose,applyMiddleware} from 'redux'
import { rootReduser } from './redux/rootReduser';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {spamFilter} from './redux/midleware'
const store = createStore(rootReduser, compose(
  applyMiddleware(
    thunk,
    spamFilter
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  ,
  document.getElementById('root')
);
