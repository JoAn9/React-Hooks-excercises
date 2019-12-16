import uuid from 'uuid';
import { NEW_MESSAGE } from './types';

export const newMessage = text => ({
  type: NEW_MESSAGE,
  payload: { id: uuid(), text, timestamp: Date.now() },
});
