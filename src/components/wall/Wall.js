import React, { useReducer } from 'react';
import reducer, { initialState } from '../../state/reducer';
import PublishMessage from './PublishMessage';

function Wall() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <h2>Wall</h2>
      <hr />
      <PublishMessage dispatch={dispatch} />
    </div>
  );
}

export default Wall;
