import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CreateProduct from './components/CreateProduct/CreateProduct';


function App() {

  return (
    <Router>
      <Nav />
      <Hero />
      <Routes>
        <Route
          path='/'
          element={<Home />}
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
          path='/createListing'
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


