import './App.css';
import Home from '../src/components/Home';
import Nav from '../src/components/Nav';
import CategoryMenu from './components/CategoryMenu';
const axios = require('axios').default;


// send a POST request
axios({
  method: 'post',
  url: '/api/user',
  data: {
    username: "jim",
    email: "jim@gmail.com",
    password: "password1234",
    zip: "43214"
  }
})
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})

function App() {
  return (
    <div>
        <Nav />
        <Home />
        <CategoryMenu />
    </div>
  );
}

export default App;