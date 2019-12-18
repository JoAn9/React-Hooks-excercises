import React, { useReducer } from 'react';
import reducer, { initialState } from '../../state/reducer';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';

function Wall() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Wall</h2>
      <hr />
      <PublishMessage dispatch={dispatch} />
      <hr />
      <MessageBoard messages={state.messages} />
    </div>
  );
}

export default Wall;
