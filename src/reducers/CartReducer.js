// import { combineReducers } from 'redux'
// import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILURE } from '../actions/constants.js'

// const initialState = {
//   checkoutStatus: {
//     checkoutPending: false,
//     error: null,
//   },
//   quantityById: {},
// }

// function checkoutStatus(state = initialState.checkoutStatus, action) {
//   switch (action.type) {
//     case CHECKOUT_REQUEST:
//       return {
//         checkoutPending: true,
//         error: null,
//       }
//     case CHECKOUT_SUCCESS:
//       return initialState.checkoutStatus
//     case CHECKOUT_FAILURE:
//       return {
//         checkoutPending: false,
//         error: action.error,
//       }
//     default:
//       return state
//   }
// }

// function quantityById(state = initialState.quantityById, action) {
//   const { productId } = action
//   switch (action.type) {
//     case CHECKOUT_SUCCESS:
//       return initialState.quantityById
//     case ADD_TO_CART:
//       return {
//         ...state,
//         [productId]: (state[productId] || 0) + 1,
//       }
//     case REMOVE_FROM_CART:
//       const qty = (state[productId] || 0) - 1
//       const copy = { ...state }
//       if (qty > 0) copy[productId] = qty
//       else delete copy[productId]
//       return copy
//     default:
//       return state
//   }
// }

// // export default combineReducers({
// //   checkoutStatus,
// //   quantityById,
// // })

// export function getQuantity(state, productId) {
//   return state.quantityById[productId] || 0
// }

// export function getAddedIds(state) {
//   return Object.keys(state.quantityById)
// }


// // const initialState = {
// //   cart: []
// // };

// const cartReducer = (state = initialState, action) => {

//     let cart = state.cart;

//     switch(action.type) {

//         case 'ADD_TO_CART':

//             cart.push(action.payload);

//             return {
//                 ...state,
//                 cart: cart
//             };
//         case 'UPDATE_CART_QUANTITY':

//             let item = cart.find(item => item.product.id == action.payload.productId);

//             let newCart = cart.filter(item => item.product.id != action.payload.productId);

//             item.quantity = action.payload.quantity;

//             newCart.push(item);

//             return {
//                 ...state,
//                 cart: newCart
//             };

//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 cart: cart.filter(item => item.product.id != action.payload.productId)
//             };
//             case 'CHOOSE_PRODUCT':
//               return {
//                 ...state,
//                 product_Id: state.product.product_Id
//               };
//         default:
//             return state;
//     }
// };

// export default cartReducer