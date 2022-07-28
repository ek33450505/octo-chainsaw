import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Auth from '../src/utils/auth';
import './App.css';
import Home from './pages/Home';
import Nav from '../src/components/Nav/nav.js';
import Hero from '../src/components/Hero/hero.js';
import Footer from '../src/components/Footer/footer.js';
import Signup from '../src/components/Signup/signup.js';
import Login from '../src/components/Login/login.js';
import ProductList from '../src/components/ProductList/productlist.js';
import CategoryMenu from '../src/components/CategoryMenu/categorymenu';
import MyAccount from '../src/components/MyAccount/myaccount.js';
import Contact from '../src/components/Contact/contact.js';
import CreateProduct from '../src/components/CreateProduct/CreateProduct'
import MyListings from '../src/components/MyListings/myListings';
import Calendar from '../src/components/Calendar/calendar';


function App() {

  const [userId, setUserId] = useState();
  const [currentCategory, setCurrentCategory] = useState("")

    const getUserData = async () => {
        try {
            //use Auth obj to retrieve token from storage and set to variable 'token'
            const token = Auth.loggedIn() ? Auth.getToken() : null;

            if (!token) {
                return false;
            }
        
        //retrieve user id saved in token (user id)
        const user = Auth.getProfile();
            console.log(user.data.id);
            setUserId(user.data.id);
            
            
            } catch (err) {
                console.error(err);
            }
        };

        useEffect(() => {
            getUserData();
        })


  return (
    <Router>
      <Nav currentCategory = {currentCategory} setCurrentCategory={setCurrentCategory}/>
      <Hero />
      <Routes>
        <Route
          path='/'
          element={<Home currentCategory = {currentCategory} setCurrentCategory={setCurrentCategory}/>}
        />
        <Route
          path='/signup'
          element={<Signup />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/'
          element={<CategoryMenu />}
        />
        <Route
          path='/myaccount'
          element={<MyAccount />}
        />
        <Route
          path='/mylistings'
          element={<MyListings userId={userId}/>}
        />
        <Route
          path='/createproduct'
          element={<CreateProduct />}
        />
        <Route
          path='/productlist'
          element={<ProductList />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/calendar'
          element={<Calendar />}
        />
      </Routes>
      <Footer currentCategory = {currentCategory} setCurrentCategory={setCurrentCategory}/>
    </Router>
  );
}

export default App;


