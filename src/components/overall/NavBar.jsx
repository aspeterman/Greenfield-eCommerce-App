import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-dom';

const NavBar = () => {
    return(
      <nav>
        <Router />
          <div className="nav-bar">
            <ul>
              <li><Link to ='/' />Hello</li>
          </ul>
        </div>
      </nav>
    )
  }


export default NavBar;