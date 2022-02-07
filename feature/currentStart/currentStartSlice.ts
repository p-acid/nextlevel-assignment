import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentStartInterface } from '../../interface/interface';
import { LIST_INFO } from '../../public/constants/constants';

const { PRODUCTS_LIMIT, PAGE_LIST_LIMIT } = LIST_INFO;

const initialState: CurrentStartInterface = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'currentStart',
  initialState,
  reducers: {
    next(state, action: PayloadAction<number>) {
      state.value = (action.payload + PAGE_LIST_LIMIT) * PRODUCTS_LIMIT;
    },
    before(state, action: PayloadAction<number>) {
      state.value = (action.payload - PAGE_LIST_LIMIT) * PRODUCTS_LIMIT;
    },
    picked(state, action: PayloadAction<number>) {
      state.value = action.payload * PRODUCTS_LIMIT;
    },
  },
});

export const { next, before, picked } = counterSlice.actions;
export default counterSlice.reducer;
