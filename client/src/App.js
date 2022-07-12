import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import ProductPage from './pages/ProductPage';
import CategoriesPage from './pages/CategoriesPage';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import MessagesPage from './pages/MessagesPage';
import CreateListingPage from './pages/CreateListingPage';
const axios = require('axios').default;





function App() {
 
    return (
        <Router>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/signup'
                element={<SignupPage />}
              />
              <Route
                path='/login'
                element={<LoginPage />}
              />
              <Route
                path='/'
                element={<CategoriesPage />}
              />
              <Route
                path='/myaccount'
                element={<AccountPage />}
              />
              <Route
                path='/createListing'
                element={<CreateListingPage />}
              />
              <Route
                path='/productList'
                element={<ProductPage />}
              />
            </Routes>
        </Router>
    );
}

export default App;