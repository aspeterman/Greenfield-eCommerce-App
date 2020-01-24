import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
const axios = require('axios')
export default function configureStore(initialState=axios.get('http://52.26.193.201:3000/products/list').then((something) => console.log(something))) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}