import { combineReducers } from 'redux';
import CartReducer from "./CartReducer.js"
import questionReducer from "./questionReducer.js"
// import fetchQuestions from "../fetchQuestions.js"
import productReducer from './ProductReducer.js'
import reviewReducer from './reviewReducer.js'

export default combineReducers({
  product: productReducer,
   cart: CartReducer,
  question:questionReducer,
  review: reviewReducer,
// review,
});
