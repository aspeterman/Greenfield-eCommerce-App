import React, { Component } from 'react'
class Product extends Component
{
    state = {
        inCart: this.props.inCart,
        selectProduct: this.props.selectProduct
    };
      selectProduct = (e) => {
        e.preventDefault();
        console.log('selected')
        this.props.selectProduct(this.props.product);
        this.setState({
          selectProduct: true
      })
  }

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            <div className="col-md-3">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img className="img-responsive" src={product.results.photos}/>
                    </div>
                    <figcaption className="info-wrap">
                        <a href='#' onClick={this.selectProduct} className="name">{product.name}</a>
                        <p className="slogan">{product.slogan}</p>
                        <p className="desc">{product.description}</p>
                        <p className="category">{product.category}</p>
                    </figcaption>
                    <div className="bottom-wrap">

                        {
                            this.state.inCart?(
                                <span className="btn btn-success">Added to cart</span>
                            ) : (
                                <a href="#" onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Add to cart</a>
                            )
                        }

                        <div className="price-wrap h5">
                            <span className="price-new">${product.default_price}</span>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}

export default Product;
// import PropTypes from 'prop-types'

// export default class Product extends Component {
//   render() {
//     const { price, quantity, title, action } = this.props
//     return (
//       <div>
//         {title} - &#36;{price} {quantity ? `x ${quantity}` : null} {action}
//       </div>
//     )
//   }
// }

// Product.propTypes = {
//   price: PropTypes.number,
//   quantity: PropTypes.number,
//   title: PropTypes.string,
//   action: PropTypes.node,
// }