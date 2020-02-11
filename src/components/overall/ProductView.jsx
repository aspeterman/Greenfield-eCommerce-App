import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core';
import Header from './Header';
import RatingsView from '../Reviews/ratingsView.jsx'
import Reviews from '../Reviews/review.jsx'
import ResultsView from '../Reviews/results/resultsView.jsx'
import NewReview from '../Reviews/newReview';

import StarRating from '../Reviews/ratingSymbol'


class ProductView extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            viewProducts: false,
            viewReview: false,
            rating: 0
        }
        this.selectProduct = this.selectProduct.bind(this)
    }


    handleClose = () => {
        this.setState({
            ...this.state,
            open: false,
            image: {image: 'Denim.jpg'}
        })
    }



    selectProduct = (tempProducts, image) => {
        this.props.dispatch({ type: 'CHOOSE_PRODUCT', payload: tempProducts });
        this.setState({
            ...this.state,
            product: image,
        })
    }

    render() {
      // const { product } = this.props;
      const {product} = this.props.state.product.products.map(results => results.results.map(x => x.photos.map(y=>y.url)))
      console.log(this.props.state.product.products.map(results => results.results.map(x => x.photos.map(y=>y.url))))
      const {review} = this.props.state.review.reviews.map(results => results.results.map(result=>result.photos.map(x=>x.url)))
      console.log(this.props.state.review.reviews.map(results => results.results.map(result=>result)))

        return (

            <div className="main">
                <Header className={this.props.id} />
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-6 column-md-6">
                        <Reviews />
                            <div className="flex-box flex-center">
                                <Button color="primary" variant="contained" onClick={() => this.setState({...this.state, viewProducts : true})}>View Products</Button>
                            </div>

                    </div>
                {this.state.viewProducts && this.selectProduct &&<div className="flex-box flex-evenly column-4 column-md-8">
                <div><h2>Products</h2></div>
                  {this.props.state.review.reviews.map(results => results.results.map(result=>
                  <div>
                    <p>Rating ID: {result.review_id}</p>
                    <p>Summary: {result.summary}</p>
                    <p>Rating: <StarRating /></p>
                    <img src={result.photos.url}/>
                  </div>
                    ))}
                    {this.props.state.product.products.map((ex, i) => {
                        return (
                            <div className="thumbnail" key={i}>
                    <h3>{ex.name}</h3>

                                <p>Click On Photo To Enlarge</p>
                                <img src={product} onClick={() => this.setState({ ...this.state, open: true, image: ex })} alt={`products-${i + 1}`} />
                                <p onClick={() => this.setState({ ...this.state, open: true, image: ex })} >Click</p>
                                <StarRating state={this.state}/>
                            </div>
                        )
                    })}

                </div>}

                <div>

      </div>


                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <div className="dialog">

                    <div><h3>photo</h3>
                    <img className="full-img" src={product} alt="demo"/>
                                                <div className="flex-box flex-center">
                                <Button color="primary" variant="contained" onClick={() => this.setState({...this.state, viewReview : true})}>Review This Product</Button>
                            </div>
                    </div>
                    </div>

                {this.state.viewReview && <div className="flex-box flex-evenly">
                    <Button onClick={this.navigateBack}>Back</Button>
                    <Button color="primary" onClick={this.next}>Next</Button>
                    <NewReview/>
                </div>}
              </Dialog>
                  </div>

            </div>
        )
}
}


const mapStoreToProps = (state) => ({
    state
});
export default connect(mapStoreToProps)(ProductView);
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Product from './Product'
// import TableComponent from '../Reviews/results/table.jsx'
// import StarRating from '../Reviews/ratingSymbol'

// export default class ProductItem extends Component {
//   render() {
//     const { product } = this.props
//     const addToCartAction = (
//         // <button onClick={console.log(this.state)} />
//       <button onClick={this.props.onAddToCartClicked} disabled={product.products.inventory > 0 ? '' : 'disabled'}>
//         {product.products.inventory > 0 ? 'Add to cart' : 'Sold Out'}
//       </button>
//     )


//     return (
//       <div style={{ marginBottom: 20 }}>
//         <Product title={product.title} price={product.price} action={addToCartAction} />
//         {/* <StarRating/> */}
//       </div>
//     )
//   }
// }

// ProductItem.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired,
//   }).isRequired,
//   onAddToCartClicked: PropTypes.func.isRequired,
//   onAddToCartFunction: PropTypes.func.isRequired
// }