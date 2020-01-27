import { combineReducers } from 'redux';
import productReducer from "./productReducer.js"
import cart from "./shoppingCartReducer.js"
import questionReducer from "./questionReducer.js"

export default combineReducers({
  productReducer,
  cart,
  questionReducer
});