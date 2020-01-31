import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
 import Aq from './Question_Answers/main_QA/Aq_Main.jsx'
import RatingsView from './components/Reviews/reviewsList.jsx'
// import ResultsView from './components/Reviews/results/resultsView.jsx'
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
      {/* <ResultsView /> */}
      {/* <DefaultReview /> */}
    </div>
  );
}
}


export default connect()(App);
