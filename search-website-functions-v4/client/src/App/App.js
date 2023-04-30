import React, {useState, useEffect} from 'react';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Context for user authentication
import { AuthContext } from '../contexts/AuthContext';

// App shell components
import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';

// React Router page components
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import SearchInfo from '../pages/SearchInfo/SearchInfo';
import TaxPenalty from '../pages/TaxPenalty/TaxPenalty';
import TaxStore from '../pages/TaxStore/TaxStore';
import Details from '../pages/Details/Details';
import Status from '../pages/Status/Status';

// Bootstrap styles, optionally with jQuery and Popper
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Custom app styles
import './App.css';

export default function App() {
  // React Hook: useState with a var name, set function, & default value
  const [user, setUser] = useState({});

  // Fetch authentication API & set user state
  async function fetchAuth() {
    const response = await fetch("/.auth/me");
    if (response) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        response.json()
          .then(response => setUser(response))
          .catch(error => console.error('Error:', error));
      }
    }
  }

  // Fetch user groups
  async function fetchUserGroups(){
    const userId = user.clientPrincipal.userId
    const response = await fetch(`https://graph.microsoft.com/v1.0/users/${userId}/memberOf`)
    const userGroups = await response.json();
    if (userGroups){
      console.log(userGroups)
    }
  }

  // React Hook: useEffect when component changes
  // Empty array ensure this only runs once on mount
  useEffect(() => {
    fetchAuth()
    fetchUserGroups()
  }, []);

  const router = createHashRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/searchinfo" element={<SearchInfo />} />
      <Route path="/taxpenalty" element={<TaxPenalty />} />
      <Route path="/taxstore" element={<TaxStore />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/status" element={<Status />} />
      </>
    )
  );


  return (
    <AuthContext.Provider value={user}>
      <div className="container-fluid app">
        <AppHeader />
        <RouterProvider router={router} />
        <AppFooter />
      </div>
    </AuthContext.Provider>
  );
}
