const DEFAULT_STATE = { records : [] };
import types from '../actions/types';

export default function(state=DEFAULT_STATE, action){

  switch(action.type){
    case types.RECORD:
      return {...state, records: [...state.records, action.payload]};
    default:
      return state;
  }
}
