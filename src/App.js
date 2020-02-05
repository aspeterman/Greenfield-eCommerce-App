import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
 import Aq from './components/Question_Answers/main_QA/Aq_Main.jsx'
import RatingsView from './components/Reviews/ratingsView.jsx'
import Home from './components/overall/Home.jsx'
import ProductView from './components/overall/ProductView.jsx'
// import NavBar from './actions/overall/NavBar.jsx'


class App extends Component {


  render(){
  return (

    <div className="App">
      {/* <NavBar /> */}
      <header className="App-header">
      </header>
      <Home />
      <ProductView />
      <Aq/>
      <RatingsView />

    </div>
  );
}
}


export default connect()(App);
