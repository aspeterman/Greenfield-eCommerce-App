import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import logger from 'redux-logger'
// import initialState from '../reducers/initialState.js'
export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
  )}