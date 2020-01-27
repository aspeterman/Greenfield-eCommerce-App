import initialState from './initialState.js'
import P from '../actions/constants.js'

const cart = (state = [], action) => {
  switch (action.type) {
  case P.ADD_PRODUCT :
    return [
    ...state,
    cart({}, action)
    ]
  case P.RATE_PRODUCT :
    return state.map(
    p => cart(p, action)
    )
  case P.REMOVE_PRODUCT :
    return state.filter(
    p => p.id !== action.id
    )
  default:
  return state
  }
 }

 export default cart