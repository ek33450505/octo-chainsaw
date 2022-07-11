import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import AccountPage from './pages/AccountPage'
import MessagesPage from './pages/MessagesPage'
// const axios = require('axios').default;


function App() {
  return (
    <div>
        <AccountPage />
        <MessagesPage />
    </div>
  );
}

export default App;
