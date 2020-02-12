
import App from './App.js';
import configureStore from './store/store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  { unregister } from './serviceWorker';
import {createStore} from 'redux'

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createMuiTheme} from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'
 import rootReducer from './reducers/rootReducer.js';
// import dataService from './store/config.js'
// import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios'
const redux =require('redux')
const thunk = require('redux-thunk').default;
const applyMiddleware = redux.applyMiddleware
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFFFFF',
            main: '#0EB3AA',
            dark: '#FFFFFF',
            contrastText: 'rgb(0,0,0)'
          }
      }
})
const initalstate = {
    loading:false,
    question:[],
    review: [],
    error:''

}

const FETCH_USERS_REQUEST= 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS= 'FETCH_USERS_SUCCESS'
const FETCH_REVIEWS_REQUEST = 'FETCH_REVIEWS_REQUEST'
const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS'
const Fetch_User_Request= () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const Fetch_User_Success= question => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: question
    }
}
const Fetch_Review_Request =() => {
    return {
    type: FETCH_REVIEWS_REQUEST,
    }
}
const Fetch_Review_Success = review => {
    return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: review
    }
}
const Reducer = (state = initalstate,action) => {
 switch(action.type){
 case FETCH_USERS_REQUEST:
     return{
     ...state,
     loading: true
     }
     case FETCH_USERS_SUCCESS:
            return{
            ...state,
            loading: false,
            question: action.payload,
            }
    }
 }
const fetchQA = ()=> {
    return function(dispatch){
        dispatch(Fetch_User_Request())
        axios.get("http://52.26.193.201:3000/products/list")
        .then(response =>{
            console.log(response.data)
            dispatch(Fetch_User_Success(response.data))

        })
    }

}
const fetchReview = ()=> {
    return function(dispatch){
        dispatch(Fetch_Review_Request())
        // axios.get('http://52.26.193.201:3000/' + this.props.state.product.products.id + `/list?page=${this.state.page}&sort=${this.state.sort}`)
        axios.get('http://52.26.193.201:3000/reviews/1/list')
        .then(response =>{
            console.log(response.data)
            dispatch(Fetch_Review_Success(response.data))

        })
    }
}



const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchReview())
store.dispatch(fetchQA())
ReactDOM.render(<MuiThemeProvider theme={theme}><Provider store={store}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
//  unregister();
// store.dispatch({ type: 'Load' })

