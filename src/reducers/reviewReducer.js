import * as type from '../actions/constants.js';

let blankFeedback = {
    name: '',
    product: '',
    fit: 0,
    style: 0,
    overall: 0,

};
const initialState = {
    isLoading: false,
    isLoadMore: false,
    loadAfter: {1: '', 2: ''},
    reviews: [
        {
            "product": "1",
            "page": 0,
            "count": 5,
            "results": [
              {
                "review_id": 5,
                "rating": 3,
                "summary": "I'm enjoying wearing these shades",
                "recommend": 0,
                "response": "",
                "body": "Comfortable and practical.",
                "date": "2019-04-14T00:00:00.000Z",
                "reviewer_name": "shortandsweeet",
                "helpfulness": 5,
                "photos": [{
                    "id": 1,
                    "url": "urlplaceholder/review_5_photo_number_1.jpg"
                  },
                  {
                    "id": 2,
                    "url": "urlplaceholder/review_5_photo_number_2.jpg"
                  },
                  // ...
                ],
              },
              {
                "review_id": 3,
                "rating": 4,
                "summary": "I am liking these glasses",
                "recommend": 0,
                "response": "Glad you're enjoying the product!",
                "body": "They are very dark. But that's good because I'm in very sunny spots",
                "date": "2019-06-23T00:00:00.000Z",
                "reviewer_name": "bigbrotherbenjamin",
                "helpfulness": 5,
                "photos": [],
              },
              // ...
            ]
          },
    ]
}
// const shoppingCartReducer = function(state = initialState, action) {
//   switch (action.type) {
//   case FETCH_REVIEWS:
//       return Object.assign({}, state, {
//       isRefreshing: action.isRefreshing,
//       loading: action.loading,
//       isLoadMore: action.isLoadMore,
//       reviews: action.reviews
//       });
//   case FETCH_REVIEWS:
//       return Object.assign({}, state, {
//       isRefreshing: false,
//       isLoadMore: false,
//       noMore: action.reviewData.children.length === 0,
//       reviews: state.isLoadMore ? loadMore(state, action) : combine(state, action),
//       loading: state.reviews[action.typeId] === undefined
//       });
//   default:
//       return state;
//   }
// }


// function combine (state, action) {
//   state.products.reviews[action.typeId] = action.reviewData.children;
//   state.products.reviewAfter[action.typeId] = action.after;
//   return state.products.reviews;
// }

// function loadMore (state, action) {
//   state.reviews[action.typeId] = state.reviews[action.typeId].concat(action.reviewData.children);
//   state.reviewAfter[action.typeId] = action.after;
//   state.after = action.after;
//   console.error('after=', action.reviewData.after);
//   console.error(state.reviews);
//   return state.reviews;
// }

const reviewReducer = (state = [], action ) => {


    let reviews = state.reviews

    if(type === 'ADD_NAME'){
    return {
        ...state,
        name: action.payload
    };
    } else if(type === 'FETCH_PRODUCTS_PENDING'){
    return {
        ...state,
        pending: true
    }
    } else if(type === 'FETCH_REVIEWS') {
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore,
                pending: false,
                reviews: action.payload
                });
    } else if(type === 'FETCH_REVIEWS_ERROR') {
    return {
        ...state,
        pending: false,
        error: action.error
    }
    } else if(type === 'ADD_REVIEW'){
        state.reviews.push(action.payload)
        return {
            ...state,
            reviews: reviews
        };
    } else if (type === 'FIT_RATING') {
        return {
            ...state,
            fit: action.payload,
        }
    } else if (type === 'STYLE_RATING'){
    return {
            ...state,
            style: action.payload,
        }
    } else if (type === 'OVERALL_RATING'){
        return {
            ...state,
            overall: action.payload,
        }
    } else if (type === 'CLEAR_RATING'){
        return blankFeedback;
    } else {
        return state;
    }
}


export const getReviews = state => state.products.reviews;
export const getReviewsPending = state => state.pending;
export const getReviewsError = state => state.error;
export const chooseProduct = state => state.products.id;
export const getStyle = state => state.products.style;
export const getFit = state => state.fit;
export const getOverall = state => state.overall;

export default reviewReducer
