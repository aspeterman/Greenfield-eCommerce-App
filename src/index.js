
import App from './App.js';
import configureStore from './store/store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  { unregister } from './serviceWorker';
import {createStore} from 'redux';
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
// const initalstate = {
//     loading:false,
//     question:[],
//     error:''

// }

const FETCH_USERS_REQUEST= 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS= 'FETCH_USERS_SUCCESS'
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
// const Reducer = (state = initalstate,action) => {
//  switch(action.type){
//  case FETCH_USERS_REQUEST:
//      return{
//      ...state,
//      loading: true
//      }
//      case FETCH_USERS_SUCCESS:
//             return{
//             ...state,
//             loading: false,
//             question: action.payload,
//             }
//     }
//  }
const fetchQA = ()=> {
    return function(dispatch){
        dispatch(Fetch_User_Request())
        axios.get("http://52.26.193.201:3000/qa/1")
        .then(response =>{
            console.log(response.data)
            dispatch(Fetch_User_Success(response.data))

        })
    }

}

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchQA())
ReactDOM.render(<MuiThemeProvider theme={theme}><Provider store={store}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
//  unregister();
// store.dispatch({ type: 'Load' })



