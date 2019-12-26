import React from 'react';

function PublishReactions({ reactions }) {
  if (!reactions) return null;

  return reactions.map((item, index) => {
    const { id, emoji, username } = item;
    return (
      <span key={id}>
        {username}: {emoji}
        {index === reactions.length - 1 ? null : ', '}
      </span>
    );
  });
}

export default PublishReactions;
