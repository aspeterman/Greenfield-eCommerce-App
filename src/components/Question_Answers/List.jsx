import React, { Component } from 'react'
import { connect } from 'react-redux';
import AnswerModal from './AnswerModal.jsx'
// import  recieveReviews  from '../actions/fetch-reviews.js';
// import store from '../store/store.js';

import initialState from '../../reducers/initialState'

// import Search from './Search'
// import List from '../List'
//  import Modal from './Modal'
// import {useSelector} from 'react-redux'



class List extends Component {
    render() {
    //  const reactState = useSelector(state => state)
        return (
        <div>
          <ul id='question'>

            {initialState.products[0].questions ? initialState.products[0].questions[0].results.map((each) => { return(
          <li>{`Q: ${each["question_body"]}`}&nbsp;&nbsp;
          <a href="#">yes</a>{`(${each["question_helpfulness"]})| `}<AnswerModal/><br></br>
              <ul id='answer'>
              {Object.keys(each["answers"]).map((every,i) =>
               <li key ={i+1}>{`A: ${each["answers"][every]["body"]}`}<br></br>
              {`by${each["answers"][every]["date"]},${each["answers"][every]["answerer_name"]}| helpful? `}<a href="/">yes</a>{`(${each["answers"][every]["helpfulness"]})|`}<a href="#">Report</a><br></br></li>
              )}
              <a href="#">Load more answers</a><br></br>
              </ul>

        </li>
            )}): null}
          </ul>
          {/* <p>{this.state? this.state.reviews: null}</p> */}
        </div>
        )
    }
}
export default List;