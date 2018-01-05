const DEFAULT_STATE = { guess : null };
import types from '../actions/types';

export default function(state=DEFAULT_STATE, action){
  switch (action.type) {
    case 'guess':
      return  {...state, guess: action.payload};
    default:
      return state;

  }
}
