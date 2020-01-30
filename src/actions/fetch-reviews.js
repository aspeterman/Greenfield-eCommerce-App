function receiveReviews(greenfield, item) {
  return {
    type: 'ADD_REVIEW',
    greenfield,
    item: item,
    // reviews: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
export default receiveReviews;
