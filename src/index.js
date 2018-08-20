import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { save, load } from 'redux-localstorage-simple'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './state';

const history = createHistory()
const middleware = [routerMiddleware(history), thunk, logger]
const store = createStore(
	reducers,
  	load(),
  	composeWithDevTools(compose(applyMiddleware(...middleware, save())))
)

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));
