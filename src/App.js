import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
// import './sass/style.scss';
 import Aq from './components/Question_Answers/main_QA/Aq_Main.jsx'
import RatingsView from './components/Reviews/ratingsView.jsx'
import NewReview from './components/Reviews/newReview.jsx'
import DefaultReview from './components/Reviews/defaultReview.jsx'
import Reviews from './components/Reviews/review.jsx'
import ProductView from './components/overall/ProductView.jsx'
import Header from './components/overall/Header.jsx'
import ProductList from './components/overall/ProductList.jsx'
import Cart from './components/overall/Cart.jsx'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {


  render(){
  return (

    <div className="App">

       <header className="App-header"> 
       <Header /> 
     </header> 
     <ProductList /> 
      <NewReview />
    <Reviews />
    <DefaultReview />
     <RatingsView /> 
     <ProductView /> 
       <Cart /> 
      <Aq/>

    </div>
  );
}
}


export default connect()(App);
