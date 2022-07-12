import './App.css';
import Home from './pages/Home';
import CreateListingPage from './pages/CreateListingPage';
import GenerateProductList from './pages/ProductPage';

import React, {useEffect} from 'react';
const axios = require('axios').default;

// send a POST request


function App() {
  // useEffect(()=>{
    
  // }, [])
  return (
    <div>
        <GenerateProductList />
    </div>
  );
}

export default App;