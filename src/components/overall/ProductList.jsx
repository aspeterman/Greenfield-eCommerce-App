// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import ProductItem from './ProductView'

// // import { connect } from 'react-redux'
// import { addToCart } from '../../actions/CartReducer.js'
// import { getVisibleProducts } from '../../reducers/shoppingCartReducer.js'

// class ProductList extends Component {
//   render() {
//     const { products, addToCart } = this.props

//     return (
//       <div>
//         <h3>Products</h3>
//         {products.map(product => (
//           <ProductItem key={product.id} product={product} onAddToCartClicked={() => addToCart(product.id)} />
//         ))}
//       </div>
//     )
//   }
// }

// ProductList.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       inventory: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
//   addToCart: PropTypes.func.isRequired,
// }
import React, {Component} from 'react'
import Product from './Product';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core';
import TableComponent from '../Reviews/results/table.jsx'
import {addToCart, chooseProduct} from "../../actions/actions";
import NewReview from '../Reviews/newReview.jsx'
import Header from './Header.jsx'

class ProductList extends Component
{

    addToCart = (product) => {
        this.props.addToCart(product);
    }

    render() {
        return (
            <div className="container">
                <h2>Product List</h2>
                <br/>

                <div className="row">

                    {
                        this.props.products.map(product => <div><Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id} /><TableComponent /><br/></div> )
                    }


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(ProductList)



// export default connect(
//   state => ({ products: getVisibleProducts(state.products) }),
//   { addToCart },
// )(ProductList)

// const mapStoreToProps = (storage) => ({
//   storage
// });
// export default connect(mapStoreToProps)(ProductList);