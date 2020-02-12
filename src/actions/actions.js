
import axios from 'axios'
export function loadCategories() {
  return(dispatch)=>{
    return axios.get("http://52.26.193.201:3000/qa/1").then((response)=>{

    dispatch(getCategories(response))

    })
  }
}
export function getCategories(data) {
  return {
    type: "get_Categories",
     data:data
  }
}
// {
//   type: 'AWESOME', //success type
//   payload: [1,2,3] //data from response
//   meta: {
//     request:{
//       url:'/categories' //whole reqquest from payload
//     },
//     response: {
//       // ... axios response object without data
//       status:200,
//       statusTest:'OK',
//       headers: {},
//       config: {}
//     },
//     // all meta keys
//   }
// }
// {
//   type:'OH_NO',
//   error:['Error1', 'Error2'] //data from axios response error
//   // ... same as success
// }

// export const FETCH_FLIGHT = 'FETCH_FLIGHT';

// export const getAllFlights = () => {
//   return {
//     type: FETCH_FLIGHT,
//     payload: {
//       request: {
//         method: 'get', // or get
//         url:'http://52.26.193.201:3000/qa/1'
//       }
//     }
//   }
// }

// export function loadCategories() {
//   return {
//     type: 'LOAD',
//     payload: {
//       request:{
//         url:'/categories'
//       }
//     }
//   }
// }


export const fetchReviewsSuccess = (review) => {
  return {
    type: 'FETCH_REVIEWS',
    // reviews: reviews,
    payload: {
      review,
      quantity: 1
  }
    // reviews: json.data.children.map(child => child.data),
    // receivedAt: Date.now()
  }
}

export const fetchReviewsPending = (pending) => {
  return {
      type: 'FETCH_REVIEWS_PENDING',
      isLoading: true
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

