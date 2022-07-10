import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage';
import Nav from '../src/components/Nav/nav.js';
import Footer from '../src/components/Footer/footer.js';
import Hero from '../src/components/Hero/hero.js';
import React, {useEffect} from 'react';
import { ProductList } from './components/ProductList/productlist';
const axios = require('axios');


// send a POST request




function App() {
  
  return (
    <div>
        <LoginPage />
        <CategoriesPage/>
        <ProductList/>
        <Nav />
        <Hero />
        <Home />
        <Footer />
    </div>
  );
}

export default App;