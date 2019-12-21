import React from 'react';
import { REACTION_OBJECTS } from '../../state/types';

function Reaction() {
  return (
    <div className="CreateReaction">
      {REACTION_OBJECTS.map(item => {
        const { emoji, type } = item;
        return <span key={type}>{emoji}</span>;
      })}
    </div>
  );
}

export default Reaction;
