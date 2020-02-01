import initialState from './initialState.js'
// import P from '../actions/constants.js'

// const cart = (state = [], action) => {
//   switch (action.type) {
//   case P.ADD_PRODUCT :
//     return [
//     ...state,
//     cart({}, action)
//     ]
//   case P.RATE_PRODUCT :
//     return state.map(
//     p => cart(p, action)
//     )
//   case P.REMOVE_PRODUCT :
//     return state.filter(
//     p => p.id !=== action.id
//     )
//   default:
//   return state
//   }
//  }

//  export default cart
import * as types from '../actions/constants.js'

const reviewReducer = function(state = initialState, action) {
  switch (action.type) {
  case types.FETCH_REVIEWS:
      return Object.assign({}, state, {
      isRefreshing: action.isRefreshing,
      loading: action.loading,
      isLoadMore: action.isLoadMore
      });
  case types.RECEIVE_REVIEWS:
      return Object.assign({}, state, {
      isRefreshing: false,
      isLoadMore: false,
      noMore: action.reviewData.children.length === 0,
      reviewList: state.isLoadMore ? loadMore(state, action) : combine(state, action),
      loading: state.reviewList[action.typeId] === undefined
      });
  default:
      return state;
  }
}

function combine (state, action) {
  state.reviewList[action.typeId] = action.reviewData.children;
  state.redditAfter[action.typeId] = action.after;
  // console.info('after=', state.after);
  return state.reviewList;
}

function loadMore (state, action) {
  state.reviewList[action.typeId] = state.reviewList[action.typeId].concat(action.reviewData.children);
  state.reviewAfter[action.typeId] = action.after;
  state.after = action.after;
  console.error('after=', action.reviewData.after);
  console.error(state.reviewList);
  return state.reviewList;
}

export default reviewReducer