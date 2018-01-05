import types from './types';


export function pickNumber(){
  return{
    type: types.NUMBER,
    payload: Math.ceil(Math.random()*1000)
  }
}

export function guessNumber(num){
  return{
    type: types.GUESS,
    payload: num
  }
}
