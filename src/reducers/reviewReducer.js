import initialState from "./initialState";
import * as type from '../actions/constants.js';

let blankFeedback = {
    name: '',
    product: '',
    fit: 0,
    style: 0,
    overall: 0,

};

const reviewReducer = (state = initialState, action ) => {
    if(type === 'ADD_NAME'){
    return {
        ...state,
        name: action.payload
    };
    } else if(type === 'CHOOSE_PRODUCT'){
    return {
        ...state,
        product: action.payload,
    };
    } else if(type === 'FETCH_PRODUCTS_PENDING'){
    return {
        ...state,
        pending: true
    }
    } else if(type === 'FETCH_REVIEWS') {
    return {
        ...state,
        pending: false,
        products: action.payload
    }
    } else if(type === 'FETCH_REVIEWS_ERROR') {
    return {
        ...state,
        pending: false,
        error: action.error
    }
    } else if(type === 'ADD_REVIEW'){
        return {
            ...state,
            reviewList: action.payload
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


export const getReviews = state => state.reviewList;
export const getReviewsPending = state => state.pending;
export const getReviewsError = state => state.error;
export const chooseProduct = state => state.product;
export const getStyle = state => state.style;
export const getFit = state => state.fit;
export const getOverall = state => state.overall;

export default reviewReducer
