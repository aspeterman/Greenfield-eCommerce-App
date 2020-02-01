import { combineReducers } from 'redux';
import productReducer from "./productReducer.js"
import cart from "./shoppingCartReducer.js"
import questionReducer from "./questionReducer.js"
import reviewReducer from './shoppingCartReducer.js'
import review from './reviewReducer.js'

export default combineReducers({
  productReducer,
  cart,
  questionReducer,
  reviewReducer,
  review,
});