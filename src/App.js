import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
 import Aq from './Question_Answers/main_QA/Aq_Main.jsx'
// import NavBar from './actions/overall/NavBar.jsx'

class App extends Component {


  render(){
  return (
    <div className="App">
      {/* <NavBar /> */}
        <Aq/>
      <header className="App-header">
      </header>
    </div>
  );
}
}


export default connect()(App);
