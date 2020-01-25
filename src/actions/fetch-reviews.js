function receiveReviews(greenfield, item) {
  return {
    type: 'ADD_PRODUCT',
    greenfield,
    item: item,
    // reviews: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
export default receiveReviews;
