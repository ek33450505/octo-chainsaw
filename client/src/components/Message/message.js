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
    let token = Auth.getToken();
    await axios({
      method: 'get',
      url: `/api/message/${props.recipient_id}`,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      }

    })
      //update the state with category data
      .then(function (response) {
        // console.log(response.data);
        setMessages(response.data);
      })
  };

  useEffect(() => {
    fetchListings();
}, [props.recipient_id]);

  //map categories to cards
  return (
    <div>
      {messages.map(element => {
        return (
          <Link to='/api/message/'>
            <h2>{element.message_text}</h2>
          </Link>
        )
      })}
    </div>
  )
}