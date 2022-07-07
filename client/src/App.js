import './App.css';
import Home from './pages/Home';
import React, {useEffect} from 'react';
const axios = require('axios').default;


// send a POST request


function App() {
  useEffect(()=>{
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
  }, [])
  return (
    <div>
        <Home />
    </div>
  );
}

export default App;