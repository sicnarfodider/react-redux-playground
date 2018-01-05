const DEFAULT_STATE = { number: null };
import types from '../actions/types';

export default function(state=DEFAULT_STATE, action){
  switch(action.type){
    case 'pickNumber':
      return {...state, number: action.payload};
    default:
      return state;
  }
}
