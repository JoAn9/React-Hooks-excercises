import { NEW_MESSAGE, SET_USERNAME } from './types';

export const initialState = { messages: [], username: '' };

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
      };
    case SET_USERNAME: {
      return {
        ...state,
        username: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
