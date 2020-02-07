import { combineReducers } from 'redux';
import CartReducer from "./CartReducer.js"
import questionReducer from "./questionReducer.js"
import productReducer from './ProductReducer.js'
import reviewReducer from './reviewReducer.js'

export default combineReducers({
  product: productReducer,
  cart: CartReducer,
  questionReducer,
  review: reviewReducer,
  // review,
});