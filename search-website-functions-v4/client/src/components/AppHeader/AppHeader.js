import React from 'react';
import AppHeaderAuth from '../AppHeaderAuth/AppHeaderAuth';

import logo from '../../images/Altus-Group-white-transparent.png';

import './AppHeader.css';


export default function AppHeader() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={logo} height="100" className="navbar-logo" alt="Altus" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-white">
            <li className="nav-item">
              <a className="nav-link" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/Search">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/SearchInfo">FAQ</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="https://azure.microsoft.com/services/search/">Learn more</a>
            </li> */}
          </ul>
        </div>
        <div class="px-4 bg-warning">
          <span class="navbar-text text-black lead">
            UAT
          </span>
        </div>


        <AppHeaderAuth />
      </nav>
      
    </header>
  );
};
