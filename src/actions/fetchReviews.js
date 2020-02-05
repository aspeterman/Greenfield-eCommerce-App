import {fetchReviewsPending, fetchReviewsSuccess, fetchReviewsError} from './actions.js';


function fetchReviews() {
  return dispatch => {
      dispatch(fetchReviewsPending());
      fetch('http://http//52.26.193.201:3000//reviews/:product_id/list')
      .then(res => res.json())
      .then(res => {
          if(res.error) {
          // throw(res.error);
          console.log('error getting review data')
      }
          dispatch(fetchReviewsSuccess(res.reviews))
          console.log('success')
          return res.reviews;

      })
      .catch(error => {
          dispatch(fetchReviewsError(error));
      })
  }
}
export default fetchReviews;
