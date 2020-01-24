import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
// import NavBar from './actions/overall/NavBar.jsx'

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <NavBar /> */}
      <header className="App-header">
      </header>
    </div>
  );
}
}
//cool


export default connect()(App);
