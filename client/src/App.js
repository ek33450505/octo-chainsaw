import './App.css';
<<<<<<< HEAD
import Home from '../src/pages/Home';
=======
import Home from './pages/Home';
import React, {useEffect} from 'react';
const axios = require('axios').default;
>>>>>>> 74ffe367045a53d3af5e9f993d04ef5366aec227

const axios = require('axios').default;

// send a POST request


function App() {
  // useEffect(()=>{
    
  // }, [])
  return (
    <div>
        <Home />
    </div>
  );
}

export default App;