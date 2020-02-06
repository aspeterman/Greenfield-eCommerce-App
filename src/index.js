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
import logger from 'redux-logger';
import {createMuiTheme} from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'
import rootReducer from './reducers/rootReducer.js';

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
const storeInstance = createStore (
    rootReducer,
    applyMiddleware(logger),
);

ReactDOM.render(<MuiThemeProvider theme={theme}><Provider store={storeInstance}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
unregister();
