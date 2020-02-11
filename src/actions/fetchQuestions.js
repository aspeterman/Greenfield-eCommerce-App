import {fetchReviewsPending, fetchReviewsSuccess, fetchReviewsError} from './actions.js';
import axios from 'axios'
import initialState from '../reducers/initialState'

let defaultState ={
    data:initialState 
}
const questionReducer =(state = defaultState,action)=>{
    if (action === "get_Categories"){
     return{ ...state, 
     data:action
     }

    }else {
        return{ ...state }
    }





} 
export default questionReducer;
// function fetchQuestions() {
//     return dispatch => {
//         dispatch(fetchReviewsPending());
//         axios('http://52.26.193.201:3000/qa/1')
//         .then(res => res.json())
//         .then(res => {
//             if(res.error) {
//           // throw(res.error);
//             console.log('error getting review data')
//         }
//     console.log(res)
//         dispatch(fetchReviewsSuccess(res))
//         return res;

//     })
//     .catch(error => {
//         dispatch(fetchReviewsError(error));
//     })
//   }
// }
// export default fetchQuestions;
