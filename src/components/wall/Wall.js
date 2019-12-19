import React, { useReducer, useEffect } from 'react';
import Context from '../../context';
import PubSub from '../../pubsub';
import reducer, { initialState } from '../../state/reducer';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';

const pubsub = new PubSub();

function Wall() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { message } = messageObject;

        dispatch(message);
      },
    });
  }, []);
  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Wall</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default Wall;
