import {combineReducers} from 'redux';
import pickNumber from './pick-number';
import recordNumber from './record';

export default combineReducers(
  {
    number: pickNumber,
    records: recordNumber
  }
);
