import {fetchReviewsPending, fetchReviewsSuccess, fetchReviewsError} from './actions.js';
import axios from 'axios'

function fetchReviews() {
    return dispatch => {
        dispatch(fetchReviewsPending());
        axios('http://52.26.193.201:3000/reviews/list')
        .then((res)=> dispatch(fetchReviewsSuccess(res.reviews)))
    
    .catch(error => {
        dispatch(fetchReviewsError(error));
    })
  }
}
export default fetchReviews;