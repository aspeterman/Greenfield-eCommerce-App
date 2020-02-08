// import React from 'react';
// import StarRating from '../overview/StarRating.jsx';
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {Button, Input, FormControl } from '@material-ui/core';
// import Header from '../overall/Header';
// class HomeView extends Component {
//   constructor() {
//       super();
//       this.state = {
//           name: '',
//       }
//   }

//   handleNameChange = (event) => {
//       console.log(event.target.value);
//       this.setState({
//           name: event.target.value,
//       });
//   } // end handleMealChange

//   submitName = (event) => {
//       event.preventDefault();
//       const action = { type: 'ADD_NAME', payload: this.state.name };
//       console.log(this.props)
//       console.log(this.state);
//       this.props.dispatch(action);
//       // this.props.history.push('/lesson');
//   } // end submitMeal
//   render() {

//       return (
//           <div className="main">
//               <Header className={this.props.home} />
//               <div className="flex-box flex-evenly form-zone">
//                   <div className="center">
//                       <h2>Instructions</h2>
//                   </div>
//                   <div className="instructions column-6 text-left">

//                       <div className="flex-box flex-center">
//                           <FormControl>
//                               <Input aria-label="name" className="margin-top-15" placeholder="Enter your name" value={this.state.name} onChange={this.handleNameChange} required /> <br /><br />
//                               <Button color="secondary" variant="contained" onClick={this.submitName}>Submit</Button>
//                           </FormControl>
//                       </div>
//                       <div className='charContainer' key={1}>
//         {/* {char}{reqstar} <div className='indicator'>{index !== undefined ? meaning[index] : 'None selected'}</div> */}
//         <div className='char'>
//           <div>
//             <input type='radio' name={1} value='1' required onChange={(e) => this.props.force()}></input>
//           </div>
//           <div>
//             <input type='radio' name={1} value='2' onChange={(e) => this.props.force()}></input>
//           </div>
//           <div>
//             <input type='radio' name={1} value='3' onChange={(e) => this.props.force()}></input>
//           </div>
//           <div>
//             <input type='radio' name={1} value='4' onChange={(e) => this.props.force()}></input>
//           </div>
//           <div>
//             <input type='radio' name={1} value='5' onChange={(e) => this.props.force()}></input>
//           </div>
//         </div>
//         <div className='char'>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//           <div>4</div>
//           <div>5</div>
//         </div>
//         <div className='bottom-meaning'>
//           {/* <div>{meaning[0]}</div>
//           <div>{meaning[4]}</div> */}
//         </div>
//       </div>

//                   </div>
//               </div>

//           </div>


//       );
//   }
// }
// const mapStateToProps = state => ({
//   home: state.home
// })
// export default connect(mapStateToProps)(HomeView);


import React from 'react';
import RatingSymbol from './ratingSymbol.jsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { green, orange, grey } from '@material-ui/core/colors';



const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[500],
    },
  },
});





const NewReview = (props) => {

  let christics = [];
  let reqstar = (<span className='reqstar'>*</span>)
  let createChars = (char, meaning) => {
    let index;
    let radios = document.getElementsByName(char);
    if (radios) {
      for (let i = 0; i < radios.length; ++i) {
        if (radios[i].checked) {
          index = Number(radios[i].value) - 1;
        }
      }
    }
    christics.push(
      <div className='charContainer' key={char}>
        {char}{reqstar} <div className='indicator'>{index !== undefined ? meaning[index] : 'None selected'}</div>
        <div className='char'>
          <div>
            <input type='radio' name={char} value='1' required onChange={(e) => props.force()}></input>
          </div>
          <div>
            <input type='radio' name={char} value='2' onChange={(e) => props.force()}></input>
          </div>
          <div>
            <input type='radio' name={char} value='3' onChange={(e) => props.force()}></input>
          </div>
          <div>
            <input type='radio' name={char} value='4' onChange={(e) => props.force()}></input>
          </div>
          <div>
            <input type='radio' name={char} value='5' onChange={(e) => props.force()}></input>
          </div>
        </div>
        <div className='char'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div className='bottom-meaning'>
          <div>{meaning[0]}</div>
          <div>{meaning[4]}</div>
        </div>
      </div>
    );
  }

  return (

    <div id='rmodal' className='rmodal' data-selector='new-review-modal' onClick={(e) => {
      if (e.target.id === 'rmodal') {
        document.getElementById('rmodal').style.display = 'none';
      }
    }}>
      <div className='rmodal-content'>
        <span className='close' onClick={(e) => {
          document.getElementById('rmodal').style.display = 'none';
        }}>&times;</span>
        <h5>Write Your Review</h5>
        <div className='text-main bold rlabel'>About the {props.name}</div>
        <form className='text-reg' onSubmit={(e) => {
          console.log(this.props)
          console.log(this.state)
          e.preventDefault();
          let review = {};
          let rating = document.getElementsByName('rrating');
          if (rating) {
            for (let i = 0; i < rating.length; ++i) {
              if (rating[i].checked) {
                review.rating = Number(rating[i].value);
              }
            }
          }
          review.summary = document.getElementById('rsummary').value;
          review.body = document.getElementById('rbody').value;
          let reco = document.getElementsByName('rrecommend');
          if (reco) {
            for (let i = 0; i < reco.length; ++i) {
              if (reco[i].checked) {
                review.recommend = Boolean(reco[i].value);
              }
            }
          }
          review.name = document.getElementById('ruser').value;
          review.email = document.getElementById('remail').value;
          review.photos = [];
          review.characteristics = {};

          review.photos = document.getElementById('rimages').value.split(',').map(str => str.trim());
          // console.log(review);
          props.submit(review);
          document.getElementById('rmodal').style.display = 'none';
        }}>
          Rating{reqstar}
          <span className='newstars'>
            {/* <RatingSymbol rating={props.state.currentRating} update={props.update} clickable={true} /><br></br> */}
          </span>


          <input className='hiddenstar' type='radio' name='rrating' value='1' required></input>
          <input className='hiddenstar' type='radio' name='rrating' value='2'></input>
          <input className='hiddenstar' type='radio' name='rrating' value='3'></input>
          <input className='hiddenstar' type='radio' name='rrating' value='4'></input>
          <input className='hiddenstar' type='radio' name='rrating' value='5'></input>
          <div className='rrecommend'>Recommended{reqstar}
          <ThemeProvider theme={innerTheme}>
        <Checkbox defaultChecked value="true" >Yes</Checkbox>
        <Checkbox defaultChecked />
      </ThemeProvider>
            <input className='radio' type='radio' name='rrecommend' value='true' required></input>
            <label htmlFor='yes'>Yes</label>
            <input className='radio' type='radio' name='rrecommend' value='false'></input>
            <label htmlFor='no'>No</label>
          </div>
          <div id='christics'>
            Characteristics:<br></br>
            {christics}
          </div>
          Summary{reqstar}<br></br>
          <input type='text' id='rsummary'  maxLength='60' autoFocus required></input><br></br>
          <div className='body-container'>
            Review body{reqstar}<br></br>
            <textarea id='rbody' rows='4' minLength='50' maxLength='1000' required onChange={(e) => {

            }} placeholder="Tell us about your experience with our product"></textarea><br></br>

          </div>
          <input type='text' id='ruser' maxLength='16' required></input><br></br>
          Email{reqstar}
          <div className='remailContainer'>
            <input type='text' id='remail' required pattern='[^@\s]+@[^@\s]+\.[^@\s]+'></input><br></br>

          </div>
          Images <br></br>
          <textarea
            id='rimages'
            maxLength='1000'

            rows='2'>
          </textarea>
          {reqstar}<br></br>
          <button>SUBMIT REVIEW</button>
        </form>
      </div>
    </div>
  );
}

export default NewReview;