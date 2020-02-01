import initialState from "./initialState";
import * as type from '../actions/constants.js';


// const initialState = {
//   isRefreshing: false,
//   loading: false,
//   isLoadMore: false,
//   noMore: false,
//   reVIEWList: {},
//   reVIEWAfter: {1: '', 2: '', 3: '', 4: ''}
// };


const review = (state = initialState, action ) => {
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
    } else if(type === 'ADD_REVIEW'){
        return {
            ...state,
            product: action.payload
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
        return initialState;
    } else {
        return state;
    }
}
// const home = (state = true, action) => {
//     if (type === 'NAV_TO_REVIEW'){
//         return false;
//     } else {
//         return state;
//     }
// }
export default review
