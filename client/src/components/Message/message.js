import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Message(props) {
  const [messages, setMessages] = useState([]);

  //on page render, run fetch function
  useEffect(() => {
    fetchMessages();
  }, [props.username]);

  //axios get request to fetch all categories
  const fetchMessages = async () => {
    await axios({
      method: 'get',
      url: `/api/message/${props.username}`

    })
      //update the state with category data
      .then(function (response) {
        // console.log(response.data);
        setMessages(response.data);
        console.log(response);
      })
  };

  //map categories to cards
  return (

    <div>
        <section>
        <h1 data-testid="h1tag">My Messages</h1>
      {messages.map(element => {
        return (
          <Link to='/api/message/{props.username}'>
            <h2>{element.username}</h2>
            <h2>{element.message_text}</h2>
          </Link>
        )
      })}
        <form id="reply-message">
          <h1 data-testid="h1tag">Reply To Message</h1>
          <div>
            <label htmlFor="email">To:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" />
          </div>
          <button data-testid="button" type="submit">Send</button>
        </form>
      </section>
    );
    </div>
  )}
