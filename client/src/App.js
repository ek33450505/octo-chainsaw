import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

import React, {useEffect} from 'react';
const axios = require('axios').default;

// send a POST request


function App() {
  // useEffect(()=>{
    
  // }, [])
  return (
    <div>
        <LoginPage />
    </div>
  );
}

export default App;