import { combineReducers } from 'redux';
import enlargeReducer from './enlargeReducer';

export default combineReducers(
  {
    enlarge: enlargeReducer
  }
)
