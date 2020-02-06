import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
//  import Aq from './components/Question_Answers/main_QA/Aq_Main.jsx'
import RatingsView from './components/Reviews/ratingsView.jsx'
import Home from './components/overall/Home.jsx'
import ProductView from './components/overall/ProductView.jsx'
import Header from './components/overall/Header.jsx'

class App extends Component {


  render(){
  return (

    <div className="App">
      {/* <NavBar /> */}
      <Header />
      <header className="App-header">
      </header>
      <Home />
      <ProductView />
      {/* <Aq/> */}

    </div>
  );
}
}


export default connect()(App);
