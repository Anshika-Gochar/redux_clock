import { combineReducers } from 'redux';
import { clockReducer } from './clock/clockReducer';

const rootReducer = combineReducers({
  clock: clockReducer
});

export default rootReducer;