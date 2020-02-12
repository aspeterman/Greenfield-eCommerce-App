import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import CartItem from './CartItem'
// import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../../actions/constants.js'
import { getTotal, getCartProducts, getCheckoutError, isCheckoutPending } from '../../actions/constants.js'

// class Cart extends Component {
//   render() {
//     const { products, total, error, checkoutPending, checkout, removeFromCart } = this.props

//     const hasProducts = products.length > 0
//     const checkoutAllowed = hasProducts && !checkoutPending

//     const nodes = !hasProducts ? (
//       <em>Please add some products to cart.</em>
//     ) : (
//       products.map(product => (
//         <CartItem
//           title={product.title}
//           price={product.price}
//           quantity={product.quantity}
//           key={product.id}
//           onRemove={() => removeFromCart(product.id)}
//         />
//       ))
//     )

//     return (
//       <div>
//         <h3>Your Cart</h3>
//         <div>{nodes}</div>
//         <p>Total: &#36;{total}</p>
//         <button onClick={checkout} disabled={checkoutAllowed ? '' : 'disabled'}>
//           Checkout
//         </button>
//         <div style={{ color: 'red' }}>{error}</div>
//       </div>
//     )
//   }
// }

// Cart.propTypes = {
//   // data
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       quantity: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
//   total: PropTypes.string,
//   error: PropTypes.string,
//   checkoutPending: PropTypes.bool,

//   // actions
//   checkout: PropTypes.func.isRequired,
//   removeFromCart: PropTypes.func.isRequired,

import CartItem from './CartItem';
import { connect } from 'react-redux';

class Cart extends Component
{
    render() {

        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);

        const cart  = this.props.cart.length > 0?(
            <div>
                <div className="panel-body">
                    {
                        this.props.cart.map(item => {
                            return (
                                <div key={item.product.id}>
                                    <CartItem item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="panel-footer">
                    <div className="row text-center">
                        <div className="col-xs-11">
                            <h4 className="text-right">Total <strong>${total.toFixed(3)}</strong></h4>
                        </div>

                    </div>
                </div>
            </div>

        ) : (
            <div className="panel-body">
                <p>Cart is empty</p>
            </div>
        )

        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h5><span className="glyphicon glyphicon-shopping-cart"></span> My Shopping Cart</h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                { cart }

                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {

  return {
      cart: state.cart.cart
  }
};

// export default connect(mapStateToProps)(Cart);
// }

export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state),
  }),
  { checkout, removeFromCart },
)(Cart)

const mapStoreToProps = (storage) => ({
  storage
});
// export default connect(mapStoreToProps)(Cart);