import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './types';

export const initialState = { messages: [], username: '', reactionsMap: {} };

const reactionTypes = REACTION_OBJECTS.map(item => item.type);

const reducer = (state, action) => {
  const { type, payload } = action;

  if (reactionTypes.includes(type)) {
    let reactionsMap;
    const { messageId } = payload;
    const messageReactions = state.reactionsMap[messageId];

    if (messageReactions) {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [...messageReactions, payload],
      };
    } else {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [payload],
      };
    }

    return { ...state, reactionsMap };
  }
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
