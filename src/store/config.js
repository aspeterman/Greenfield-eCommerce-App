// import request from 'superagent'

// const getApiGenerator = next => (route, name) =>
//   request.get(route).end((err, res) => {
//     if (err) {
//       return next({
//         type: 'FETCH_REVIEWS_ERROR',
//         err
//       })
//     }
//     const data = JSON.parse(res.text)
//     next({
//       type: 'FETCH_REVIEWS_PENDING',
//       data
//     })
//   })

// const dataService = store => next => action => {
//   // next(action)
//   const getApi = getApiGenerator(next)
//   switch (action.type) {
//     case 'FETCH_REVIEWS':
//       getApi('/reviews/list', 'FETCH_REVIEWS')
//       break
//     default:
//       break
//   }
// }

// export default dataService

import axios from 'axios';
import fetchReviews from '../actions/fetchReviews.js'

const dataService = () => {
  return dispatch => {
axios.get('http://52.26.193.201:3000/qa/1')
  .then(res => dispatch(fetchReviews))
  }
}

export default dataService