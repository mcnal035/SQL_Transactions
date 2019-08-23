import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import './index.css';

import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
