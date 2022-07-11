import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from '../src/components/Nav/nav.js';
import Footer from '../src/components/Footer/footer.js';
import Hero from '../src/components/Hero/hero.js';
import CategoryMenu from '../src/components/CategoryMenu/categorymenu';
import ProductList from '../src/components/ProductList/productlist.js';



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
            path='/api/category'
            element={<CategoryMenu />}
          />
          <Route
            path='/api/product'
            element={<ProductList />}
          />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;


