import React from 'react';

export default function Message() {
    //future: will query our database for the categories

  
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
  }