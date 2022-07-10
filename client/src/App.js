import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage';
import React, {useEffect} from 'react';
const axios = require('axios');


// send a POST request
import Nav from '../src/components/Nav/nav.js';
import Footer from '../src/components/Footer/footer.js';
import Hero from '../src/components/Hero/hero.js';



function App() {
  
  return (
    <div>
        <LoginPage />
        <CategoriesPage/>
        <Nav />
        <Hero />
        <Home />
        <Footer />
    </div>
  );
}

export default App;