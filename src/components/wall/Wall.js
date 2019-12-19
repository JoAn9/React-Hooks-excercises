import React, { useReducer } from 'react';
import Context from '../../context';
import reducer, { initialState } from '../../state/reducer';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';

function Wall() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h2>Wall</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default Wall;
