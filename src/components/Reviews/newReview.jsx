// import React from 'react';
// import RatingSymbol from './ratingSymbol.jsx';
// import { connect } from 'react-redux';

// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Checkbox from '@material-ui/core/Checkbox';
// import { green, orange, grey } from '@material-ui/core/colors';
// import { Button, Dialog } from '@material-ui/core';


// const innerTheme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: grey[500],
//     },
//   },
// });

// const NewReview = (props) => {

//   let christics = [];
//   let reqStar = (<span className='reqStar'>*</span>)
//   let createChars = (char, meaning) => {
//     let index;
//     let radios = document.getElementsByName(char);
//     if (radios) {
//       for (let i = 0; i < radios.length; ++i) {
//         if (radios[i].checked) {
//           index = Number(radios[i].value) - 1;
//         }
//       }
//     }
//     christics.push(
//       <RatingSymbol />
//     );
//   }

//   return (
//     // <Dialog>

//     <div id='rmodal' className='rmodal' data-selector='new-review-modal' onClick={(e) => {
//       if (e.target.id === 'rmodal') {
//         document.getElementById('rmodal').style.display = 'none';
//       }
//     }}>
//       <div className='rmodal-content'>
//         <span className='close' onClick={(e) => {
//           document.getElementById('rmodal').style.display = 'none';
//         }}>&times;</span>
//         <h5>Write Your Review</h5>
//         <div className='text-main bold rlabel'>About the {props.name}</div>
//         <form className='text-reg' onSubmit={(e) => {
//           console.log(this.props)
//           console.log(this.state)
//           e.preventDefault();
//           let review = {};
//           let rating = document.getElementsByName('reviewRating');
//           if (rating) {
//             for (let i = 0; i < rating.length; ++i) {
//               if (rating[i].checked) {
//                 review.rating = Number(rating[i].value);
//               }
//             }
//           }
//           review.summary = document.getElementById('reviewSummary').value;
//           review.body = document.getElementById('reviewBody').value;
//           let reco = document.getElementsByName('reviewRecommended');
//           if (reco) {
//             for (let i = 0; i < reco.length; ++i) {
//               if (reco[i].checked) {
//                 review.recommend = Boolean(reco[i].value);
//               }
//             }
//           }
//           review.reviewer_name = document.getElementById('ruser').value;
//           review.email = document.getElementById('remail').value;
//           review.photos = [];
//           review.characteristics = {};

//           review.photos = document.getElementById('reviewGallery').value.split(',').map(str => str.trim());
//           console.log(review);
//           props.submit(review);
//           document.getElementById('rmodal').style.display = 'none';
//         }}>
//           Rating{reqStar}

//           <RatingSymbol />
//           <div className='reviewRecommended'>Recommended{reqStar}
//           {/* <ThemeProvider theme={innerTheme}>
//         <Checkbox defaultChecked value="true" >Yes</Checkbox>
//         <Checkbox defaultChecked />
//       </ThemeProvider> */}
//             <input className='radio' type='radio' name='reviewRecommended' value='true' required></input>
//             <label htmlFor='yes'>Yes</label>
//             <input className='radio' type='radio' name='reviewRecommended' value='false'></input>
//             <label htmlFor='no'>No</label>
//           </div>
//           <div id='christics'>
//             Characteristics:<br></br>
//             {christics}
//           </div>
//           Summary{reqStar}<br></br>
//           <input type='text' id='reviewSummary'  maxLength='60' autoFocus required></input><br></br>
//           <div className='body-container'>
//             Review body{reqStar}<br></br>
//             <textarea id='reviewBody' rows='4' minLength='50' maxLength='1000' required onChange={(e) => {

//             }} placeholder="Tell us about your experience with our product"></textarea><br></br>

//           </div>
//           <input type='text' id='ruser' maxLength='16' required></input><br></br>
//           Email{reqStar}
//           <div className='remailContainer'>
//             <input type='text' id='remail' required pattern='[^@\s]+@[^@\s]+\.[^@\s]+'></input><br></br>

//           </div>
//           Images <br></br>
//           <textarea
//             id='reviewGallery'
//             maxLength='5000'

//             rows='2'>
//           </textarea>
//           {reqStar}<br></br>
//           <button>SUBMIT REVIEW</button>
//         </form>
//       </div>
//     </div>
//     /* </Dialog> */
//   );
// }


// const mapStoreToProps = (state) => ({
//   state
// });
// export default connect(mapStoreToProps)(NewReview);