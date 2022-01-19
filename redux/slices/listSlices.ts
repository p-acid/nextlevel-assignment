import { createSlice } from '@reduxjs/toolkit';

import { LIST_INFO } from '../constants/listConstants';
import { INITIAL_STATES } from '../constants/listConstants';

const { PRODUCTS_LIMIT, PAGE_LIST_LIMIT } = LIST_INFO;

const currentPage = (state: number) => Math.floor(state / PRODUCTS_LIMIT) + 1;
const currentPagesRange = (state: number) => (Math.ceil(currentPage(state) / PAGE_LIST_LIMIT) - 1) * PAGE_LIST_LIMIT;

const currentStartSlice = createSlice({
  name: 'currentStart',
  initialState: INITIAL_STATES.CURRENT_START,
  reducers: {
    next(state, action) {
      (currentPagesRange(state) + PAGE_LIST_LIMIT) * PRODUCTS_LIMIT;
    },
    before(state) {
      (currentPagesRange(state) - PAGE_LIST_LIMIT) * PRODUCTS_LIMIT;
    },
    choice(state, action: any) {
      action.payload * PRODUCTS_LIMIT;
    },
  },
});

export const { next, before, choice } = currentStartSlice.actions;
export default currentStartSlice.reducer;
