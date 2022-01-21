import { combineReducers } from 'redux';

import { listReducer, currentStartReducer } from './listReducers';
import exampleReducer from '../slices/listSlices';

const reducer = combineReducers({ list: listReducer, currentStart: exampleReducer });

export default reducer;
