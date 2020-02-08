

export const fetchReviewsSuccess = (reviews) => {
  return {
    type: 'FETCH_REVIEWS',
    reviews: reviews,
    // reviews: json.data.children.map(child => child.data),
    // receivedAt: Date.now()
  }
}

export const fetchReviewsPending = (pending) => {
  return {
      type: 'FETCH_REVIEWS_PENDING',
      pending: false
  }
}

export const fetchReviewsError = (error) => {
  return {
      type: 'FETCH_REVIEWS_ERROR',
      error: error
  }
}
export const addToCart = (product) => {
return {
  type: 'ADD_TO_CART',
  payload: {
      product,
      quantity: 1
  }
}
}

export const removeFromCart = (productId) => {

return {
  type: 'REMOVE_FROM_CART',
  payload: {
      productId: productId
  }
}
};

export const updateCartQuantity = (productId, quantity) => {

return {
type: 'UPDATE_CART_QUANTITY',
payload: {
    productId,
    quantity: quantity
}
}
};

export const selectProduct = (productId) => {
  return {
    type: 'CHOOSE_PRODUCT',
    payload: {
      productId: productId
    }
  }
}

export function getData() {
  return fetch('http://52.26.193.201:3000/reviews/list')
    .then(response => response.json())
    .then(json => {
      return { type: "DATA_LOADED", payload: json };
    });
}