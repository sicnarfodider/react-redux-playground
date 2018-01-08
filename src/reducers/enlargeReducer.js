import types from '../actions/types';

const DEFAULT_STATE = { enlarged: false };


export default function(state=DEFAULT_STATE, action){
  switch (action.type) {
    case types.ENLAGE:
        return { enlarged: !state.enlarged}
    default:
        return state;
  }
};
