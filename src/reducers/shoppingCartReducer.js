import initialState from './initialState.js'
import { combineReducers } from 'redux'
import { FETCH_REVIEWS, REVIEW_PRODUCT, ADD_PRODUCT, REMOVE_REVIEW } from '../actions/constants.js'

import * as types from '../actions/constants.js'

const shoppingCartReducer = function(state = initialState, action) {
  switch (action.type) {
  case types.FETCH_REVIEWS:
      return Object.assign({}, state, {
      isRefreshing: action.isRefreshing,
      loading: action.loading,
      isLoadMore: action.isLoadMore,
      review: action.products.reviewList
      });
  case types.FETCH_REVIEWS:
      return Object.assign({}, state, {
      isRefreshing: false,
      isLoadMore: false,
      noMore: action.reviewData.children.length === 0,
      reviewList: state.isLoadMore ? loadMore(state, action) : combine(state, action),
      loading: state.products.reviewList[action.typeId] === undefined
      });
  default:
      return state;
  }
}


function combine (state, action) {
  state.products.reviewList[action.typeId] = action.reviewData.children;
  state.products.reviewAfter[action.typeId] = action.after;
  return state.products.reviewList;
}

function loadMore (state, action) {
  state.reviewList[action.typeId] = state.reviewList[action.typeId].concat(action.reviewData.children);
  state.reviewAfter[action.typeId] = action.after;
  state.after = action.after;
  console.error('after=', action.reviewData.after);
  console.error(state.reviewList);
  return state.reviewList;
}

// switch (action.type) {
//   case REQUEST_POST_BODY:
//     let id = action.id;
//     return {
//       ...state,
//       [id]: {...state[id], isFetching: true }
//     };
//   case RECEIVE_POST_BODY:
//     // let id = action.id;
//     return {
//       ...state,
//       [id]: {
//         ...state[id],
//         isFetching: false,
//         body: action.body
//       }
//     };
//   default:
//     return state;
//   }




function byId(state = {}, action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {}),
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          // [productId]: products(state[productId], action),
        }
      }
      return state
  }
}

function visibleReviews(state = [], action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}



export function getProduct(state, id) {
  return state.byId[id]
}

export function getVisibleProducts(state) {
  return state.visibleReviews.map(id => getProduct(state, id))
}

export default combineReducers({
  // byId,
  visibleReviews,
  shoppingCartReducer
})





