import React, { bindActionCreators } from 'react'
import { connect } from 'react-redux';
import ReviewList from './ReviewList.jsx'
import Ratings from './Ratings.jsx';
import NewReview from './NewReview.jsx'
const url = 'http://52.26.193.201//reviews';
// const url = 'http://3.134.102.30/reviews/';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false,
      reviews: [],
      meta: {},
      page: 1,
      sort: 'helpful',
      charsLeft: 50,
      starFilters: [],
      currentRating: 0,
      search: ''
    };

    // this.updateState = this.updateState.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
    this.force = this.force.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }



  markHelpful(rid) {
    fetch(url + 'helpful/' + rid, {
      method: 'PUT'
    })
    .then(() => {
      this.forceUpdate();
      // console.log('refresh')
    })
    .catch((err) => {
      console.error(err);
    })
  }

  reportReview(rid) {
    fetch(url + 'report/' + rid, {
      method: 'PUT'
    })
    .then(() => {
      // console.log('reported, refresh and this review should be gone')
    })
    .catch((err) => {
      console.error(err);
    })
  }

  submitReview(review) {
    fetch(url + this.props.productInfo.id, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      this.getMeta();
    })
    .catch((err) => {
      console.error(err);
    })
  }

  force() {
    this.forceUpdate();
  }

  // updateState(obj, update) {
  //   this.setState(obj, () => {
  //     if (update) {
  //       // this.getReviews();
  //     }
  //   });
  // }

  componentDidMount() {
    console.log(this.props.state)
    // this.getReviews();
    // this.getMeta();
  }

  componentDidUpdate(prevProps) {
    if (this.props.productInfo.id !== prevProps.productInfo.id) {
      this.setState({
        reviews: [],
        meta: {},
        more: false
      }, () => {
        // this.getReviews();
        // this.getMeta();
        this.render();
      })
    }
  }

  render() {
    return (this.state.meta.hasOwnProperty('characteristics') ? this.renderReviews() : (
      <div>Loading Ratings & Reviews...</div>
    ));
  }

  renderReviews() {
    return (
      <div id='reviews' data-widget={'reviews' + this.props.productInfo.id}>
        <Ratings state={this.state}
        update={this.updateState}/>
        <ReviewList state={this.state}
        update={this.updateState}
        helpful={this.markHelpful}
        report={this.reportReview}
        total={this.state.meta.recommended['0'] && this.state.meta.recommended['1'] ? this.state.meta.recommended['0'] + this.state.meta.recommended['1'] : (this.state.meta.recommended['0'] ? this.state.meta.recommended['0'] : (this.state.meta.recommended['1'] ? this.state.meta.recommended['1'] : 0))}/>
        <NewReview state={this.state}
        update={this.updateState}
        pname={this.props.productInfo.name}
        force={this.force}
        submit={this.submitReview} />
      </div>
    )
  }
}

// export default Reviews;
const mapStoreToProps = (state) => ({
  state
});


export default connect(mapStoreToProps)(Reviews);