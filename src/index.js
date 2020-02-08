// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.js';
// import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux'
import configureStore from './store/store.js';

// // ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <Provider store={configureStore()}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
//   );
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  { unregister } from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createMuiTheme} from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'
import rootReducer from './reducers/rootReducer.js';
import dataService from './store/config.js'
import * as serviceWorker from './serviceWorker';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFFFFF',
            main: '#0EB3AA',
            dark: '#FFFFFF',
            contrastText: 'rgb(0,0,0)'
          }
      }
}) // Material UI theme setting
const store = createStore (
    rootReducer,
    applyMiddleware(thunk, logger),
);

ReactDOM.render(<MuiThemeProvider theme={theme}><Provider store={store}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
store.dispatch({ type: 'FETCH_REVIEWS' })
serviceWorker.unregister();
