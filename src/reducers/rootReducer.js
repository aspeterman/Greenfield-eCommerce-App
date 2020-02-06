import { combineReducers } from 'redux';
import productReducer from "./productReducer.js"
import cart from "./shoppingCartReducer.js"
import questionReducer from "./questionReducer.js"
import shoppingCartReducer from './shoppingCartReducer.js'
import reviewReducer from './reviewReducer.js'

export default combineReducers({
  productReducer,
  // shoppingCartReducer,
  questionReducer,
  reviewReducer,
  // review,
});