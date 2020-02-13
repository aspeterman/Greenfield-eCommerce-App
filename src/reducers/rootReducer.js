import { combineReducers } from 'redux';
import questionReducer from "./questionReducer.js"
// import fetchQuestions from "../fetchQuestions.js"
import productReducer from './ProductReducer.js'
import reviewReducer from './reviewReducer.js'

export default combineReducers({
  product: productReducer,
  question:questionReducer,
  review: reviewReducer,
});
