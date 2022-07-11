import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Auth from '../../utils/auth';


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
      url: '/api/message'

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
          <Link to='/api/message'>
            <h2>{element.name}</h2>
          </Link>
        )
      })}
    </div>
  )}
  
    return (
      <section>
        <h1 data-testid="h1tag">My Messages</h1>
        <div>
            <container>Display Messages Here</container>
        </div>
        <form id="reply-message">
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
