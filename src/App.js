import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
 import Aq from './components/Question_Answers/main_QA/Aq_Main.jsx'
import RatingsView from './components/Reviews/ratingsView.jsx'
import Reviews from './components/Reviews/review.jsx'
import Home from './components/overall/Home.jsx'
import ProductView from './components/overall/ProductView.jsx'
import Header from './components/overall/Header.jsx'
import ProductList from './components/overall/ProductList.jsx'
import Cart from './components/overall/Cart.jsx'
import NavBar from './components/overall/NavBar.jsx'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {


  render(){
  return (

    <div className="App">
      <Header />

      <header className="App-header">
      </header>
      {/* <Home /> */}
      <ProductList />
    {/* <Reviews /> */}
    <RatingsView />
      {/* <ProductView /> */}
      {/* <Cart /> */}
      <Aq/>

    </div>
  );
}
}


export default connect()(App);
