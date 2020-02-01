// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Header from '../overall/Header.jsx';
// import CSVLink from 'react-csv'
// import initialState from '../../reducers/initialState.js'

// class DefaultReview extends Component {
//   // constructor(props){
//   // super(props)

//   // this.state = initialState
//   // }
//     render() {
//         let rating = initialState.products;
//         // let total = parseInt(rating.fit) + parseInt(rating.style) + parseInt(rating.overall);
//         // let percent = ((total / 30) * 100).toFixed(2);
//         // let data = [['fit', 'style', 'overall', 'percent'], [ rating.fit, rating.style, rating.overall, (percent + '%')]];
//         return (
//             <div className="main">
//                 {/* // to do: add feedback -- if score given is under 50%, give pointers for seeing positive, vice versa */}
//                 {/* <Header className={this.props.storage.home} /> */}
//                 <div className="flex-box flex-end">
//                 <div className="flex-box flex-evenly column-3 form-zone">
//                   {/* <div>{data}</div> */}
//              </div>
//                 </div>

//                 <div className="flex-col flex-center center animate-pop-in">
//                 </div>
//                 <div className="flex-box flex-center column-12">
//                     <div className="results column-4">
//                         <div className="flex-box flex-between">
//                             <h4>Critical Feedback</h4> <img src={require('../../assets/images/Nike.jpg')} alt="fixit" height="25px" />
//                         </div>

//                         {/* {rating.negative.map((item, i) => {
//                             return (
//                                 <p key={i}>{item}</p>
//                             )
//                         })} */}
//                     </div>
//                         {initialState.products.filter((item, i) => {
//                             return (
//                                 <p key={i}>{item}</p>
//                             )
//                         })}
//                     </div>
//                     <div className="results column-4">
//                         <div className="flex-box flex-between">
//                             <h4>Ratings </h4>
//                         </div>
//                         <p>fit: {rating.fit}</p>
//                         <p>style: {rating.style}</p>
//                         <p>Overall: {rating.overall}</p>
//                         {/* <p>Total score: {percent}%</p> */}
//                     </div>

//                 </div>
//             // </div>

//         );
//     }
// }
// const mapStoreToProps = (storage) => ({
//     storage,
// });
// export default connect(mapStoreToProps)(DefaultReview);
