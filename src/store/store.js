import { createStore, applyMiddleware} from 'redux';
import React from 'react'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import logger from 'redux-logger'
import DataServices from './config.js'
// import ReactDOM from 'react-dom';
// import initialState from '../reducers/initialState.js'
// import App from '../App';
import * as serviceWorker from '../serviceWorker';
// import { Provider } from 'react-redux';
// export default function configureStore(initialState={}) {
//   return createStore(
//     rootReducer,
//     applyMiddleware(thunk, logger, DataServices),
//   )}

// const store = createStore(rootReducer);

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();

