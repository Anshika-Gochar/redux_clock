import { UPDATE_TIME } from './clockTypes';

const initialState = {
  currentTime: new Date()
};

export const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        currentTime: action.payload
      };
    default:
      return state;
  }
};