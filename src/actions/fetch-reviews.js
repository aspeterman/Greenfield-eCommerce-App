export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
function receivePosts(greenfield, json) {
  return {
    type: RECEIVE_REVIEWS,
    greenfield,
    reviews: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export default receivePosts