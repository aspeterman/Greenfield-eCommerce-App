import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
// import './sass/style.scss';
import Apps from './components/App'
 import Aq from './components/Question_Answers/main_QA/Aq_Main.jsx'
import RatingsView from './components/Reviews/ratingsView.jsx'
import NewReview from './components/Reviews/newReview.jsx'
// import Reviews from './components/Reviews/review.jsx'
import ProductView from './components/overall/ProductView.jsx'
import Header from './components/overview/Header.jsx'
import ProductList from './components/overall/ProductList.jsx'
// import Cart from './components/overall/Cart.jsx'
// import Carousel from './components/overview/Carousel'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {


  render(){
  return (

    <div className="App">

      <header className="App-header">
      <Header />
      </header>
      {/* <Carousel /> */}
      {/* <ProductList /> */}
      {/* <NewReview /> */}
    {/* <Reviews /> */}
    {/* <DefaultReview /> */}
    {/* <RatingsView /> */}
      {/* <ProductView /> */}
      {/* <Cart /> */}
      {/* <Aq/> */}
      <Apps />

    </div>
  );
}
}


export default connect()(App);
