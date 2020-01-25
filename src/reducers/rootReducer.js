import { combineReducers } from 'redux';
import initialState from "./initialState.js"
import productReducer from "./productReducer.js"
import GET_REVIEWS from '../actions/fetch-reviews.js'
export default combineReducers({
  initialState: productReducer(initialState,   GET_REVIEWS),

});