import {combineReducers} from 'redux';
import pickNumber from './pick-number';
import guessNumber from './guess-number';

export default combineReducers(
  {
    number: pickNumber
  },
  {
    guess: guessNumber
  }
);
