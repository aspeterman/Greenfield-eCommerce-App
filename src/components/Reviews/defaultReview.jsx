import React, { Component } from 'react';
import { connect } from 'react-redux';
import initialState from '../../reducers/initialState.js'

class DefaultReview extends Component {
  constructor(props){
  super(props)

  this.state = initialState
  }
    render() {
        let rating = this.state.products.ratings;
        // let total = rating.fit + rating.style + rating.overall;
        let total = 30
        // let percent = ((total / 30) * 100).toFixed(2);
        // let data = [['fit', 'style', 'overall', 'percent'], [ rating[0], rating[1], rating[2], (percent + '%')]];
        return (
            <div className="main">
                <div className="flex-box flex-end">
                <div className="flex-box flex-evenly column-3 form-zone">
                  {/* <div>{data}</div> */}
             </div>
                </div>

                <div className="flex-col flex-center center animate-pop-in">
                </div>
                <div className="flex-box flex-center column-12">
                    <div className="results column-4">
                        {/* {this.state.products.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })} */}
                    </div>
                        {this.state.products.length > 0 ? Object.keys(this.state.products).map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        }) : console.log('undefined')}
                    </div>
                    <div className="results column-4">
                        <div className="flex-box flex-between">
                            <h4> </h4>
                        </div>
                        {/* <p>fit: {rating.fit}</p>
                        <p>style: {rating.style}</p>
                        <p>Overall: {rating.overall}</p>
                        <p>Total score: {percent}%</p> */}
                    </div>

                </div>
            // </div>

        );
    }
}
const mapStoreToProps = (storage) => ({
    storage,
});
export default connect(mapStoreToProps)(DefaultReview);
