import { combineReducers } from 'redux';

import { listReducer, currentStartReducer } from './listReducers';

const reducer = combineReducers({ list: listReducer, currentStart: currentStartReducer });

export default reducer;
