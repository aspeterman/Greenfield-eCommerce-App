import React, {Component} from 'react'
import Slider from "react-slick";
import ProductView from './ProductView.jsx'
import { connect } from 'react-redux';
import Reviews from '../Reviews/review.jsx'


class Carousel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var settings = {
      dots: true,
      slidesToShow: 3,
      centerMode: true,
      centerPadding:0
    };
    return (
         <div className="container">
          <Slider {...settings}>
            {this.props.state.review.reviews.map(rec => {
              return <Reviews openModal={this.props.openModal} reviews={rec}/>
            })}
          </Slider>
        </div>
    )
  }
}

const mapStoreToProps = (state) => ({
  state
});
export default connect(mapStoreToProps)(Carousel);