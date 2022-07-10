import './App.css';
import React, {useEffect} from 'react';
import AccountPage from './pages/AccountPage'
const axios = require('axios').default;


function App() {
  // useEffect(()=>{
    
  // }, [])
  return (
    <div>
        <AccountPage />
    </div>
  );
}

export default App;
