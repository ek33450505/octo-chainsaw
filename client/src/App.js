import './App.css';
import Home from '../src/pages/Home';
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
        <Home />
    </div>
  );
}

export default App;