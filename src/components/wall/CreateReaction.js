import React from 'react';
import { REACTION_OBJECTS } from '../../state/types';
import { useWallContext } from '../../hooks';
import { createReaction } from '../../state/actions';

function CreateReaction({ messageId }) {
  const {
    state: { username },
    pubsub: { publish },
  } = useWallContext();

  const publishReaction = ({ type, emoji }) => () => {
    publish(createReaction({ type, emoji, username, messageId }));
  };

  return (
    <div className="CreateReaction">
      {REACTION_OBJECTS.map(item => {
        const { emoji, type } = item;
        return (
          <span key={type} onClick={publishReaction({ type, emoji })}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default CreateReaction;
