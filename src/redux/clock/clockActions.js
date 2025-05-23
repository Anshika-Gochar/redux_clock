import { UPDATE_TIME } from './clockTypes';

export const updateTime = () => {
  return {
    type: UPDATE_TIME,
    payload: new Date()
  };
};