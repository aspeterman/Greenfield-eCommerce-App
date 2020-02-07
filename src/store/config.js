import request from 'superagent'

const getApiGenerator = next => (route, name) =>
  request.get(route).end((err, res) => {
    if (err) {
      return next({
        type: 'FETCH_REVIEWS_ERROR',
        err
      })
    }
    const data = JSON.parse(res.text)
    next({
      type: 'FETCH_REVIEWS_PENDING',
      data
    })
  })

const dataService = store => next => action => {
  next(action)
  const getApi = getApiGenerator(next)
  switch (action.type) {
    case 'GET_TODO_DATA':
      getApi('/reviews/list', 'FETCH_REVIEWS')
      break
    default:
      break
  }
}

export default dataService