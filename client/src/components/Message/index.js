import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



export default function Message() {
  const [messages, setMessages] = useState([]);

  //on page render, run fetch function
  useEffect(() => {
    fetchMessages();
  }, []);

  //axios get request to fetch all categories
  const fetchMessages = async () => {
    await axios({
      method: 'get',
      url: '/api/message/:id'

    })
      //update the state with category data
      .then(function (response) {
        // console.log(response.data);
        setMessages(response.data);
      })
  };

  //map categories to cards
  return (
    <div>
      {messages.map(element => {
        return (
          <Link to='/api/message/:id'>
            <h2>{element.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}
