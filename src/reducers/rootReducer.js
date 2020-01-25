import { combineReducers } from 'redux';
import productReducer from "./productReducer.js"
import cart from "./shoppingCartReducer.js"

export default combineReducers({
  productReducer,
  cart
});