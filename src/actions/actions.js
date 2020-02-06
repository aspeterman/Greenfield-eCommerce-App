

function fetchReviewsSuccess(reviews) {
  return {
    type: 'FETCH_REVIEWS',
    reviewList: reviews,
    // reviews: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchReviewsPending(reviews) {
  return {
      type: 'FETCH_REVIEWS_PENDING',
      reviewList: reviews
  }
}

function fetchReviewsError(error) {
  return {
      type: 'FETCH_REVIEWS_ERROR',
      error: error
  }
}

module.exports = {
  fetchReviewsError,
  fetchReviewsPending,
  fetchReviewsSuccess
}