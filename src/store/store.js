import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import initialState from '../reducers/initialState.js'
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
    // initialState
  );
}