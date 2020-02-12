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
// import NewReview from '../Reviews/newReview.jsx'

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

                    {/* {
                        this.props.products.map(product => <div><Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id} />  <p><NewReview onClose={this.handleClose}/>Open</p><br/></div>
                        )
                    } */}

              {/* <Header className={this.props.store.home}/> */}
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4">
                        <h2>Your Product</h2>
                        <div className="flex-box flex-evenly">
                        <div className="thumbnail column-6 column-md-10">
                            {/* <img onClick={()=>this.setState({...this.state, open: true})} src={this.props.state.product.products.photos.url[0]} alt="your review"/> */}
                        </div>
                        </div>
                            <div className="dialog">
                                {/* <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div> */}
                                <div>
                                {/* <img className="full-img" src={this.props.products.photos.url} alt="demo" /> */}
                                </div>
                            </div>
                        {/* </Dialog> */}
                    </div>
                                  </div>
                </div>
            </div>

                  )
                }}

const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        cart: state.cart.cart,
        review: state.review.reviews
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        },

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