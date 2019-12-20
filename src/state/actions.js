import uuid from 'uuid';
import { NEW_MESSAGE, SET_USERNAME } from './types';

export const newMessage = ({ text, username }) => ({
  type: NEW_MESSAGE,
  payload: { id: uuid(), text, username, timestamp: Date.now() },
});

export const setUsername = username => ({
  type: SET_USERNAME,
  payload: username,
});
