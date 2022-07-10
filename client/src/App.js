import './App.css';
import Home from './pages/Home';
import React, {useEffect} from 'react';
import LoginPage from './pages/LoginPage';
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