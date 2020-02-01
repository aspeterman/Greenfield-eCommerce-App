function receiveReviews(greenfield, item) {
  return {
    type: 'FETCH_REVIEWS',
    greenfield,
    item: item,
    // reviews: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
export default receiveReviews;
