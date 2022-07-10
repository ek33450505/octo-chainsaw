import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage';
import React, {useEffect} from 'react';
const axios = require('axios');


// send a POST request


function App() {
  // useEffect(()=>{
    
  // }, [])
  return (
    <div>
        <LoginPage />
        <CategoriesPage/>
    </div>
  );
}

export default App;