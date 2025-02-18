import React from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from '../../components/SearchBar/SearchBar';

import "./Home.css";
import "../../pages/Search/Search.css";
import logo from '../../images/CogSearchIcon-1.gif';

export default function Home() {
  const navigate = useNavigate();
  const navigateToSearchPage = (q) => {
    if (!q || q === '') {
      q = '*'
    }
    navigate('/search?q=' + q);
  }

  return (
    <main className="main main--home">
      <div className="row home-search">
        <img className="logo" src={logo} alt="Cognitive Search"></img>
        <h1 className="display-4 title">Universal Search</h1>
        <p className="poweredby lead">Powered by Azure Cognitive Search</p>
        <SearchBar postSearchHandler={navigateToSearchPage}></SearchBar>
      </div>
    </main>
  );
};
