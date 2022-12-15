import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress  from '@material-ui/core/CircularProgress';
import { useLocation, useNavigate } from "react-router-dom";

import Results from '../../components/Results/Results';
import Pager from '../../components/Pager/Pager';
import Facets from '../../components/Facets/Facets';
import SearchBar from '../../components/SearchBar/SearchBar';

// import * as fs from 'fs';
// import * as https from 'https';

import apiBaseUrl from "../../config";
import "./Search.css";

export default function Search() {
  
  let location = useLocation();
  const navigate = useNavigate();
  
  const [ results, setResults ] = useState([]);
  const [ resultCount, setResultCount ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ q, setQ ] = useState(new URLSearchParams(location.search).get('q') ?? "*");
  const [ top ] = useState(new URLSearchParams(location.search).get('top') ?? 8);
  const [ skip, setSkip ] = useState(new URLSearchParams(location.search).get('skip') ?? 0);
  const [ filters, setFilters ] = useState([]);
  const [ facets, setFacets ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  let resultsPerPage = top;
  
  useEffect(() => {
    setIsLoading(true);
    setSkip((currentPage-1) * top);
    const body = {
      q: q,
      top: top,
      skip: skip,
      filters: filters
    };

    // axios config
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] ='*';
    // axios.defaults.headers.post['Access-Control-Allow-Methods'] ='GET,POST';
    // const httpsAgent = new https.Agent({ ca: fs.readFileSync("C:/Users/33072/OneDrive - Altus Group Limited/Downloads/ZscalerRoot.pem") });
    // axios.defaults.httpAgent = httpsAgent

    // axios.defaults.headers["Referrer-Policy"]=["strict-origin-when-cross-origin"]
    axios.defaults.headers.post['Access-Control-Allow-Origin'] ='*';
    axios.defaults.headers.post['Access-Control-Allow-Credentials'] =true;
    axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] ='GET,POST,OPTIONS';

    axios.post( `${apiBaseUrl || ""}/api/search`, body)
      .then(response => {
            console.log(JSON.stringify(response.data))
            setResults(response.data.results);
            setFacets(response.data.facets);
            setResultCount(response.data.count);
            setIsLoading(false);
        } )
        .catch(error => {
            console.log("Unable to send POST request");
            console.log(axios.defaults.headers)
            console.log(error);
            setIsLoading(false);
        });
    
  }, [q, top, skip, filters, currentPage]);

  // pushing the new search term to history when q is updated
  // allows the back button to work as expected when coming back from the details page
  useEffect(() => {
    navigate('/search?q=' + q);  
    setCurrentPage(1);
    setFilters([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);


  let postSearchHandler = (searchTerm) => {
    //console.log(searchTerm);
    setQ(searchTerm);
  }

  var body;
  if (isLoading) {
    body = (
      <div className="col-md-9">
        <CircularProgress />
      </div>);
  } else {
    body = (
      <div className="col-md-9">
        <Results documents={results} top={top} skip={skip} count={resultCount}></Results>
        <Pager className="pager-style" currentPage={currentPage} resultCount={resultCount} resultsPerPage={resultsPerPage} setCurrentPage={setCurrentPage}></Pager>
      </div>
    )
  }


  return (
    <main className="main main--search container-fluid">
      
      <div className="row">
        <div className="col-md-3">
          <div className="search-bar">
            <SearchBar postSearchHandler={postSearchHandler} q={q}></SearchBar>
          </div>
          <Facets facets={facets} filters={filters} setFilters={setFilters}></Facets>
        </div>
        {body}
      </div>
    </main>
  );
}
