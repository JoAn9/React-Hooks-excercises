import React from 'react';

function MessageBoard({ messages }) {
  return (
    <ul>
      {messages.map(item => {
        const { text, id, timestamp } = item;
        return (
          <li key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p>
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

export default MessageBoard;
