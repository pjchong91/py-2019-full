import { combineReducers } from 'redux';
import counter from './counter';
import intl from './intl';

const reducer = combineReducers({
  counter,
  intl,
});

export default reducer;
