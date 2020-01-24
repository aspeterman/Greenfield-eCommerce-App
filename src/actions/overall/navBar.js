import React from 'react';
import link, { render } from 'react-router-dom';
import ReactDom from 'react-dom';

const navBar = function() {
  render() {
    return(
      <div className="nav-bar">
        <ul>
          <li><Link to ='/' /></li>
        </ul>
      </div>
    )
  }
}

export default navBar;