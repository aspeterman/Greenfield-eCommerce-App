// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Button, Dialog } from '@material-ui/core';
// import Header from './Header';
// import RatingsView from '../Reviews/ratingsView.jsx'
// import DefaultReview from '../Reviews/defaultReview.jsx'
// import Review from '../Reviews/review.jsx'
// import ResultsView from '../Reviews/results/resultsView.jsx'
// import NewReview from '../Reviews/newReview';



// class ProductView extends Component {
//     constructor() {
//         super();
//         this.state = {
//             tempProducts: [{image: 'Denim.jpg'}, {image:'Nike.jpg'}],
//             open: false,
//             image: {image: 'Denim.jpg'},
//             viewProducts: false,
//         }
//         this.selectProduct = this.selectProduct.bind(this)
//     }
//     handleClose = () => {
//         this.setState({
//             ...this.state,
//             open: false,
//             image: {image: 'Denim.jpg'}
//         })
//     }



//     selectProduct = (tempProducts, image) => {
//         this.props.dispatch({ type: 'CHOOSE_PRODUCT', payload: tempProducts });
//         this.setState({
//             ...this.state,
//             product: image,
//         })
//     }

//     render() {
//         return (
//             <div className="main">
//                 <Header className={this.props.id} />
//                 <div className="flex-box flex-evenly form-zone animate-pop-in">
//                     <div className="column-6 column-md-6">
//                         <NewReview />
//                             <div className="flex-box flex-center">
//                                 <Button color="primary" variant="contained" onClick={() => this.setState({...this.state, viewProducts : true})}>View Products</Button>
//                             </div>
//                     </div>
//                 {this.state.viewProducts && this.selectProduct &&<div className="flex-box flex-evenly column-4 column-md-8">
//                 <div><h2>Products</h2></div>
//                     {this.state.tempProducts.map((ex, i) => {
//                         return (
//                             <div className="thumbnail" key={i}>
//                                 <p>Click On Photo To Enlarge</p>
//                                 <img src={require(`./${ex.image}`)} onClick={() => this.setState({ ...this.state, open: true, image: ex })} alt={`products-${i + 1}`} />
//                                 <Button onClick={() => this.selectProduct}>Select</Button>
//                             </div>
//                         )
//                     })}
//                 </div>}

//                 <Dialog open={this.state.open} onClose={this.handleClose}>
//                     <div className="dialog">
//                         <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
//                     <div><h3>photo</h3><img className="full-img" src={require(`./${this.state.image.image}`)} alt="demo"/><RatingsView  />
//                     <Review />
//                     <ResultsView />
//                     <NewReview />
//                     <DefaultReview />

//                     </div>
//                     </div>
//               </Dialog>
//                   </div>


//                 {this.state.viewProducts && <div className="flex-box flex-evenly">
//                     <Button onClick={this.navigateBack}>Back</Button>

//                     <Button color="primary" onClick={this.next}>Next</Button>
//                 </div>}
//             </div>

//         )}}


// const mapStoreToProps = (storage) => ({
//     storage
// });
// export default connect(mapStoreToProps)(ProductView);
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import TableComponent from '../Reviews/results/table.jsx'

export default class ProductItem extends Component {
  render() {
    const { product } = this.props
    const addToCartAction = (
        // <button onClick={console.log(this.state)} />
      <button onClick={this.props.onAddToCartClicked} disabled={product.products.inventory > 0 ? '' : 'disabled'}>
        {product.products.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    )

    return (
      <div style={{ marginBottom: 20 }}>
        <Product title={product.title} price={product.price} action={addToCartAction} />
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onAddToCartFunction: PropTypes.func.isRequired
}