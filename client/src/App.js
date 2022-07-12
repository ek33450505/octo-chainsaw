import './App.css';
import Home from './pages/Home';
import CreateListingPage from './pages/CreateListingPage';

import React, {useEffect} from 'react';
const axios = require('axios').default;

// send a POST request


function App() {
  // useEffect(()=>{
    
  // }, [])
  return (
    <div>
        <CreateListingPage />
    </div>
  );
}

export default App;