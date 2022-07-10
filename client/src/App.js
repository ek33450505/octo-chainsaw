import './App.css';
import Nav from '../src/components/Nav';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryMenu from './components/CategoryMenu';


function App() {
  return (
    <Router>
      <div>
        <Nav />
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
            element={<Product />}
          />
        </Routes>
        <Home />
      </div>
    </Router>
  );
}

export default App;











// send a POST request
// axios({
//   method: 'post',
//   url: '/api/user',
//   data: {
//     username: "jim",
//     email: "jim@gmail.com",
//     password: "password1234",
//     zip: "43214"
//   }
// })
// .then(function (response) {
//   // handle success
//   console.log(response);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })