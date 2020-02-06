import { combineReducers } from 'redux';
import cart from "./shoppingCartReducer.js"
import questionReducer from "./questionReducer.js"
import shoppingCartReducer from './shoppingCartReducer.js'
import reviewReducer from './reviewReducer.js'

export default combineReducers({
  // shoppingCartReducer,
  questionReducer,
  reviewReducer,
  // review,
});