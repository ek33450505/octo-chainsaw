import './App.css';
import Home from './pages/Home';
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Calender from './components/Calender/calender';
import CreateListingPage from './pages/CreateListingPage';



function App() {

  return (
    <div>
      <CreateListingPage />
    </div>
  );
}

export default App;