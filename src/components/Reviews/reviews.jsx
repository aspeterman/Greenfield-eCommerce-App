import React, { Component } from 'react';
import { connect } from 'react-redux';
import  recieveReviews  from '../../actions/fetch-reviews.js';
class Reviews extends Component {

  render() {

    // const reviewList = this.state.filter( (item,index)  => {
      return <div>
        <p>{this.state? this.state.reviews: null}</p>
        <button className="button"
                onClick={() => this.props.recieveReviews()}>
          Add Review
        </button>
      </div>
    // });


  //   return (
  //     <div className= "reviews">
  //       { reviewList }
  //     </div>
  //   );
  // }
}
}
function mapStateToProps(state, props) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        recieveReviews: item => dispatch(recieveReviews(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
// export default Reviews