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
            <li class="nav-item dropdown">
              <a class='nav-link dropdown-toggle' href='#' id='navbarDropdownAbout' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>About</a>
              <div class='dropdown-menu' aria-labelledby='navbarDropdownAbout'>
                <span class='nav-link' data-toggle='modal' data-target='#CUserAbout'>This Site</span>
                <span class='nav-link' data-toggle='modal' data-target='#CUabout'>Utils</span>
                <span class='nav-link' data-toggle='modal' data-target='#CUlicense'>License</span>
                <a class='nav-link' href="https://wikipedia.org/" target="_blank">Wiki</a>
              </div>
              {/* <a class="nav-link dropdown-toggle" href="/#" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuButton1">
                Tax
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/#/TaxPenalty">Penalty</a></li>
                <li><a class="dropdown-item" href="/#/TaxStore">Store number</a></li>
              </ul> */}
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="https://azure.microsoft.com/services/search/">Learn more</a>
            </li> */}
          </ul>
        </div>


        <AppHeaderAuth />
      </nav>
      
    </header>
  );
};
