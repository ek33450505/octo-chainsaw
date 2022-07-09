import './App.css';
import Home from './pages/Home';
import React, {useEffect} from 'react';
import SignupPage from './pages/SignupPage';
const axios = require('axios').default;

// send a POST request


function App() {
  // useEffect(()=>{
    
  // }, [])
  return (
    <div>
        <SignupPage />
    </div>
  );
}

export default App;