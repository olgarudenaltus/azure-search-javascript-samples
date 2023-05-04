import React, { useEffect, useState, useRef } from 'react';
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
  const [ checkedFilters, setCheckedFilters] = useState([]); // list of applied filters
  const [ checkedFiltersMap, setCheckedFiltersMap] = useState([]); //list of dictionaries: "filterName":["filterValue1","filterValue2"]

  let resultsPerPage = top;

  function splitJoin(arr) {
    const arrWithSpace = [];
    const arrWithoutSpace = [];
    
    arr.forEach(str => {
      if (str.includes(' ')) {
        arrWithSpace.push(str);
      } else {
        arrWithoutSpace.push(str);
      }
    });

    const str1 = arrWithSpace.length==0?"":"\"\\\""+arrWithSpace.join("\\\"\"|\"\\\"")+"\\\"\"";
    const str2 = arrWithoutSpace.length==0?"":"\""+arrWithoutSpace.join("\"|\"")+"\""
  
    // const str1 = "\"\\\""+arrWithSpace.join("\\\"\"|\"\\\"")+"\\\"\"";
    // const str2 = "\""+arrWithoutSpace.join("\"|\"")+"\"";

    if (str1=="" && str2==""){
      return ""
    }
    else if (str1==""){
      return "("+str2+")"
    }
    else if (str2==""){
      return "("+str1+")"
    }
    else {
      return "("+str1 + "|" + str2+")"
    }

    // console.log("Logging split join: "+ str1 +"|"+ str2)
  
    // return str1 +"|"+ str2;
  }

  function constructFilterQuery(filtersMap) {
      const queryString = Object.entries(filtersMap).map(([key, value]) => {
          return `${splitJoin(value)}`;
      });
      
      console.log("Logging construct filter query: " + queryString.join('+'))
      return queryString.join('+');
  }

  const filterQuery = constructFilterQuery(checkedFiltersMap)

  
  useEffect(() => {
    setIsLoading(true);
    setSkip((currentPage-1) * top);
    const body = {
      q: q,
      top: top,
      skip: skip,
      checkedFilters: checkedFilters,
      checkedFiltersMap: checkedFiltersMap,
      filterQuery: filterQuery,
      // checkedFilters: !checkedFilters?"":"'" + checkedFilters.join("+") + "'",
      filters: filters
    };

    console.log(body)

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
    
  }, [q, top, skip, filters, checkedFilters, currentPage, checkedFiltersMap]);

  // pushing the new search term to history when q is updated
  // allows the back button to work as expected when coming back from the details page
  useEffect(() => {
    navigate('/search?q=' + q); 
    setCurrentPage(1);
    setFilters(filters);
    setCheckedFilters(checkedFilters);
    setCheckedFiltersMap(checkedFiltersMap)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q,filters,checkedFilters,checkedFiltersMap]);


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
          {/* <div className="">
            <p id="selectedFilters">Selected: </p>
          </div> */}
          <div>
            
          </div>
          <Facets facets={facets} filters={filters} setFilters={setFilters} checkedFilters={checkedFilters} setCheckedFilters={setCheckedFilters} checkedFiltersMap={checkedFiltersMap} setCheckedFiltersMap={setCheckedFiltersMap}></Facets>
        </div>
        {body}
      </div>
    </main>
  );
}
