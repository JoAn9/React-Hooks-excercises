import React from 'react';
import { useWallContext } from '../../hooks';

function MessageBoard() {
  const {
    state: { messages },
  } = useWallContext();
  return (
    <ul>
      {messages.map(item => {
        const { id, text, username, timestamp } = item;
        return (
          <li key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p>
            <p>- {username ? username : 'anonymus'}</p>
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

export default MessageBoard;
