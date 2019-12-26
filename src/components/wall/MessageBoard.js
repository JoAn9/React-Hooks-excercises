import React from 'react';
import { useWallContext } from '../../hooks';
import CreateReaction from './CreateReaction';
import PublishReactions from './PublishReactions';

function MessageBoard() {
  const {
    state: { messages, reactionsMap },
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
            <CreateReaction messageId={id} />
            <PublishReactions reactions={reactionsMap[id]} />
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

export default MessageBoard;
