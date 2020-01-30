import React, { Component } from 'react'
import { connect } from 'react-redux';
// import  recieveReviews  from '../actions/fetch-reviews.js';
// import store from '../store/store.js';
import initialState from '../reducers/initialState'

// import Search from './Search'
// import List from '../List'
//  import Modal from './Modal'
// import {useSelector} from 'react-redux'


class List extends Component {
    render() {
    //  const reactState = useSelector(state => state)
        return (
        <div>
          <p>list</p>
          <ul id='question'>
        <li>{`Question: ${initialState.questions[0].results[0]["question_body"]}`}<br></br>
              <ul id='answer'>
              <li>{`Answer: ${initialState.questions[0].results[0]["answers"]["46"]["body"]}`}</li>
              <li>{`by${initialState.questions[0].results[0]["answers"]["46"]["date"]},${initialState.questions[0].results[0]["answers"]["46"]["answerer_name"]}| helpful? `}<a href="#">yes</a>{`(${initialState.questions[0].results[0]["answers"]["46"]["helpfulness"]})|`}<a href="#">Report</a></li>
              <li>{console.log({...initialState.questions[0].results[0]["answers"]})}</li>
              <li>{console.log(initialState.questions[0].results[0]["answers"])}</li>
              </ul>
        </li>
          
           

          </ul>
          <p>{this.state? this.state.reviews: null}</p>
        </div>
        )
    }
}
export default List;